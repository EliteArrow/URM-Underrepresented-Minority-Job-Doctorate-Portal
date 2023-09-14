<?php
// job_action.php

// Include your database connection file here
include 'db_connection.php';

// Assuming your database connection is established, you can proceed with the job posting process
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
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

    // Insert job data into the `Job` table
    $sql = "INSERT INTO `Job` (`Title`, `Description`, `Field_Of_Study`, `Qualification`, `Salary`, `Location`)
            VALUES (:job_name, :description, :department, :qualification, :salary, :location)";
    $stmt = $connection->prepare($sql);
    $stmt->bindValue(':job_name', $job_name, PDO::PARAM_STR);
    $stmt->bindValue(':description', $description, PDO::PARAM_STR);
    $stmt->bindValue(':department', $department, PDO::PARAM_STR);
    $stmt->bindValue(':qualification', $qualification, PDO::PARAM_STR);
    $stmt->bindValue(':salary', $salary, PDO::PARAM_STR);
    $stmt->bindValue(':location', $location, PDO::PARAM_STR);

    if ($stmt->execute()) {
        // Job posting successful

        // Fetch existing jobs posted from the database
        $sqlFetchJobs = "SELECT * FROM `Job`";
        $stmtFetchJobs = $connection->prepare($sqlFetchJobs);
        $stmtFetchJobs->execute();
        $jobs = $stmtFetchJobs->fetchAll(PDO::FETCH_ASSOC);

        $response = array('status' => 'success', 'message' => 'Job posted successfully.', 'jobs' => $jobs);
        echo json_encode($response);
    } else {
        // Job posting failed
        $response = array('status' => 'error', 'message' => 'Job posting failed. Please try again later.');
        echo json_encode($response);
    }

    // Close the database connection and exit
    $stmt->closeCursor();
    // Example: $connection = null;
    exit;
}
?>
