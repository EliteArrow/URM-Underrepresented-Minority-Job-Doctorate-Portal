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
    $candidateID = $userID; 

    // Insert the application record in the database
    $query = "INSERT INTO `Application` (`JobID`, `CandidateID`, `Bookmark`, `Status`, `Date_Applied`, `Field`) 
              VALUES (:jobID, :candidateID, 0, 'applied', CURDATE(), 'Type')";

    $stmt = $connection->prepare($query);
    $stmt->bindParam(':jobID', $jobID);
    $stmt->bindParam(':candidateID', $candidateID);

    if ($stmt->execute()) {
        // The job is applied successfully
        $response = array(
            'status' => 'success',
            'message' => 'Job Applied Successfully',
        );
    } else {
        // An error occurred while applying for the job
        $response = array(
            'status' => 'error',
            'message' => 'Failed to apply for the job',
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
