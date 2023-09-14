<?php

// Include your database connection file here
include 'db_connection.php';

// Assuming you have already established a connection to the database

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the jobID and userID from the request

    $data = json_decode(file_get_contents('php://input'), true);

    $jobID = $data['jobId'];
    $userID = $data['userId'];

    // Assuming you have a way to identify the candidate (e.g., using session, authentication, etc.)
    $recruiterID = $userID; 

    // Insert the application record in the database
    $query = "UPDATE Application SET RecruiterID = :recruiterID, Status = 'matched' WHERE jobID = :jobID";

    $stmt = $connection->prepare($query);
    $stmt->bindParam(':jobID', $jobID);
    $stmt->bindParam(':recruiterID', $recruiterID);

    if ($stmt->execute()) {
        // The job is applied successfully
        $response = array(
            'status' => 'success',
            'message' => 'Job Matched Successfully',
        );
    } else {
        // An error occurred while applying for the job
        $response = array(
            'status' => 'error',
            'message' => 'Failed to match for the job',
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
