<?php
// Ensure the response is identified as JSON
header('Content-Type: application/json');

// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch all candidates from the database
function getAllCandidates() {
    global $connection;

    // Fetch all data from the `Candidates` table
    $sql = "SELECT * FROM `Candidates`";
    $stmt = $connection->prepare($sql);
    $stmt->execute();

    // Fetch the results
    $candidates = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Close the database connection
    $stmt->closeCursor();

    // Return the results
    return $candidates;
}

// Assuming your database connection is established, you can proceed to fetch all candidates
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch all candidates from the database
        $candidates = getAllCandidates();

        // Return the results as JSON response
        $response = array('status' => 'success', 'candidates' => $candidates);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch all candidates: ' . $e->getMessage());
        echo json_encode($response);
    }
}
?>
