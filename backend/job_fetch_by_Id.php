<?php
// job_fetch_by_Id.php

// Include your database connection file here
include 'db_connection.php';

// Assuming your database connection is established, you can proceed with the job deletion process
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get job ID from the Axios POST request in the React app
    $data = json_decode(file_get_contents('php://input'), true);
    $jobID = $data['jobID'];

    // Validate the received job ID here if needed

    // Delete job data from the `Job` table with the given job ID
    $sql = "SELECT * FROM `Job` WHERE `JobID` = :jobID";

}
?>
