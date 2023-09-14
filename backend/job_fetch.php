<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch job data from the database and return as JSON
function getJobDataFromDatabase() {
    global $connection;

    // Fetch job data from the `Job` table
    $sql = "SELECT * FROM `Job`";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    $jobs = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Close the database connection and return the job data
    $stmt->closeCursor();
    return $jobs;
}

// Assuming your database connection is established, you can proceed to fetch the job data
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch job data from the database
        $jobs = getJobDataFromDatabase();

        // Return the job data as JSON response
        $response = array('status' => 'success', 'jobs' => $jobs);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch job data.');
        echo json_encode($response);
    }
}
?>
