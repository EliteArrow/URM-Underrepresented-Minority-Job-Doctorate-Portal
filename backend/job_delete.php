<?php
// job_delete.php

// Include your database connection file here
include 'db_connection.php';

// Assuming your database connection is established, you can proceed with the job deletion process
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get job ID from the Axios POST request in the React app
    $data = json_decode(file_get_contents('php://input'), true);
    $jobID = $data['jobID'];

    // Validate the received job ID here if needed

    // Delete job data from the `Job` table with the given job ID
    $sql = "DELETE FROM `Job` WHERE `JobID` = :jobID";
    $stmt = $connection->prepare($sql);
    $stmt->bindValue(':jobID', $jobID, PDO::PARAM_INT);

    if ($stmt->execute()) {
        // Job deletion successful
        $response = array('status' => 'success', 'message' => 'Job deleted successfully.');
        echo json_encode($response);
    } else {
        // Job deletion failed
        $response = array('status' => 'error', 'message' => 'Job deletion failed. Please try again later.');
        echo json_encode($response);
    }

    // Close the database connection and exit
    $stmt->closeCursor();
    // Example: $connection = null;
    exit;
}
?>
