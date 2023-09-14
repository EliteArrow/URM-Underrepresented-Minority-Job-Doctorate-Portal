<?php
// job_update.php

// Include your database connection file here
include 'db_connection.php';

// Assuming your database connection is established, you can proceed with updating the job data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the job ID from the URL parameter
    $jobID = $_GET['id'];

    // Get job data from the Axios POST request in the React app
    $data = json_decode(file_get_contents('php://input'), true);

    // Receive POST data from frontend
    $job_name = $data['job_name'];
    $department = $data['department'];
    $description = $data['description'];
    $location = $data['location'];
    $qualification = $data['qualification'];
    $salary = $data['salary'];
    $end_date = $data['end_date'];

    // Validate the received data here if needed

    // Update job data in the `Job` table
    $sql = "UPDATE `Job` SET `Title` = :job_name, `Description` = :description, `Field_Of_Study` = :department, `Qualification` = :qualification, `Salary` = :salary, `Location` = :location, `EndDate` = :end_date WHERE `JobID` = :job_id";
    $stmt = $connection->prepare($sql);
    $stmt->bindValue(':job_id', $jobID, PDO::PARAM_INT);
    $stmt->bindValue(':job_name', $job_name, PDO::PARAM_STR);
    $stmt->bindValue(':description', $description, PDO::PARAM_STR);
    $stmt->bindValue(':department', $department, PDO::PARAM_STR);
    $stmt->bindValue(':qualification', $qualification, PDO::PARAM_STR);
    $stmt->bindValue(':salary', $salary, PDO::PARAM_STR);
    $stmt->bindValue(':location', $location, PDO::PARAM_STR);
    $stmt->bindValue(':end_date', $end_date, PDO::PARAM_STR);

    if ($stmt->execute()) {
        // Job data updated successfully

        // Fetch the updated job data from the database
        $sqlFetchJob = "SELECT * FROM `Job` WHERE `JobID` = :job_id";
        $stmtFetchJob = $connection->prepare($sqlFetchJob);
        $stmtFetchJob->bindValue(':job_id', $jobID, PDO::PARAM_INT);
        $stmtFetchJob->execute();
        $job = $stmtFetchJob->fetch(PDO::FETCH_ASSOC);

        $response = array('status' => 'success', 'message' => 'Job data updated successfully.', 'job' => $job);
        echo json_encode($response);
    } else {
        // Job data update failed
        $response = array('status' => 'error', 'message' => 'Job data update failed. Please try again later.');
        echo json_encode($response);
    }

    // Close the database connection and exit
    $stmt->closeCursor();
    // Example: $connection = null;
    exit;
}
?>
