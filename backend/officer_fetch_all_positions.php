<?php
// Ensure the response is identified as JSON
header('Content-Type: application/json');

// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch all positions from the database
function getAllPositions() {
    global $connection;

    // Fetch all data from the `Position` table
    $sql = "SELECT * FROM `Position`";
    $stmt = $connection->prepare($sql);
    $stmt->execute();

    // Fetch the results
    $positions = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Close the database connection
    $stmt->closeCursor();

    // Return the results
    return $positions;
}

// Assuming your database connection is established, you can proceed to fetch all positions
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch all positions from the database
        $positions = getAllPositions();

        // Return the results as JSON response
        $response = array('status' => 'success', 'positions' => $positions);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch all positions: ' . $e->getMessage());
        echo json_encode($response);
    }
}

?>
