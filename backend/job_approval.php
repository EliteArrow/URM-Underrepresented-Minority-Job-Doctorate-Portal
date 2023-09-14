<?php
// job_apply.php

// Include your database connection file here
include 'db_connection.php';

// Assuming you have already established a connection to the database

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the jobID and userID from the request

    $data = json_decode(file_get_contents('php://input'), true);

    $jobID = $data['jobId'];
    $userID = $data['userId'];

    // Assuming you have a way to identify the candidate (e.g., using session, authentication, etc.)
    $officerID = $userID; 

    // Update the application record in the database
    $query = "UPDATE `Job` SET `OfficerID` = :officerID, `Status` = 'approved' WHERE `JobID` = :jobID";

    $stmt = $connection->prepare($query);
    $stmt->bindParam(':jobID', $jobID);
    $stmt->bindParam(':officerID', $officerID);

    if ($stmt->execute()) {
        // The job is applied successfully
        $response = array(
            'status' => 'success',
            'message' => 'Job Approved Successfully',
        );
    } else {
        // An error occurred while applying for the job
        $response = array(
            'status' => 'error',
            'message' => 'Failed to approved for the job',
        );
    }

    $stmt->closeCursor();
} else {
    $response = array(
        'status' => 'error',
        'message' => 'Invalid request method',
    );
}

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
