<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch positions from the database with a status of "Under Review"
function getUnderReviewPositions() {
    global $connection;

    // Fetch positions with the status "Under Review"
    $sql = "SELECT * FROM `Position` WHERE `Status` = 'Under Review'";
    $stmt = $connection->prepare($sql);
    $stmt->execute();

    // Fetch the results
    $positions = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Close the database connection
    $stmt->closeCursor();

    // Return the results
    return $positions;
}

// Assuming your database connection is established, you can proceed to fetch the positions with a status of "Under Review"
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch positions from the database
        $positions = getUnderReviewPositions();

        // Return the results as JSON response
        $response = array('status' => 'success', 'positions' => $positions);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch positions: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
        