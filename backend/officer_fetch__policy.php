<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch policy data from the database and return as JSON
function getPolicyDataFromDatabase() {
    global $connection;

    // Fetch policy data from the `Policy` table
    $sql = "SELECT * FROM `Policy`";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    $policies = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Close the database connection and return the policy data
    $stmt->closeCursor();
    return $policies;
}

// Assuming your database connection is established, you can proceed to fetch the policy data
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch policy data from the database
        $policies = getPolicyDataFromDatabase();

        // Return the policy data as JSON response
        $response = array('status' => 'success', 'policies' => $policies);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch policy data.');
        echo json_encode($response);
    }
}
?>
