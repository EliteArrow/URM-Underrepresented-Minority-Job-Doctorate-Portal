<?php
// job_save.php

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

    // Check if the job is already saved by the candidate
    $query = "SELECT * FROM `Application` WHERE `JobID` = :jobID AND `CandidateID` = :candidateID";
    $stmt = $connection->prepare($query);
    $stmt->bindValue(':jobID', $jobID);
    $stmt->bindValue(':candidateID', $candidateID);
    $stmt->execute();
    $result = $stmt->fetchAll();

    if (count($result) > 0) {
        // The job is already saved, update the existing record
        $query = "UPDATE `Application` SET `Bookmark` = 1, `Status` = 'saved', `Date_Applied` = NOW(), `Field` = 'Type' 
                  WHERE `JobID` = :jobID AND `CandidateID` = :candidateID";
        $stmt = $connection->prepare($query);
        $stmt->bindValue(':jobID', $jobID);
        $stmt->bindValue(':candidateID', $candidateID);

        if ($stmt->execute()) {
            // The job is saved successfully
            $response = array(
                'status' => 'success',
                'message' => 'Job Saved Successfully',
            );
        } else {
            // An error occurred while saving the job
            $response = array(
                'status' => 'error',
                'message' => 'Failed to save the job',
            );
        }
    } else {
        // The job is not saved, insert a new record
        $query = "INSERT INTO `Application` (`JobID`, `CandidateID`, `Bookmark`, `Status`, `Date_Applied`, `Field`) 
                  VALUES (:jobID, :candidateID, 1, 'saved', NOW(), 'Type')";
        $stmt = $connection->prepare($query);
        $stmt->bindValue(':jobID', $jobID);
        $stmt->bindValue(':candidateID', $candidateID);

        if ($stmt->execute()) {
            // The job is saved successfully
            $response = array(
                'status' => 'success',
                'message' => 'Job Saved Successfully',
            );
        } else {
            // An error occurred while saving the job
            $response = array(
                'status' => 'error',
                'message' => 'Failed to save the job',
            );
        }
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
