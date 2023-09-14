<?php
// Ensure the response is identified as JSON
header('Content-Type: application/json');

// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch all recruiters from the database
function getAllRecruiters() {
    global $connection;

    // Fetch all data from the `Recruiter` table
    $sql = "SELECT * FROM `Recruiter`";
    $stmt = $connection->prepare($sql);
    $stmt->execute();

    // Fetch the results
    $recruiters = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Close the database connection
    $stmt->closeCursor();

    // Return the results
    return $recruiters;
}

// Assuming your database connection is established, you can proceed to fetch all recruiters
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch all recruiters from the database
        $recruiters = getAllRecruiters();

        // Return the results as JSON response
        $response = array('status' => 'success', 'recruiters' => $recruiters);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch all recruiters: ' . $e->getMessage());
        echo json_encode($response);
    }
}
?>
