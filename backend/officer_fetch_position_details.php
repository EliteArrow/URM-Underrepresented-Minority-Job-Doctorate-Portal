<?php
// Ensure the response is identified as JSON
header('Content-Type: application/json');

// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch details of a specific position from the database
function getPositionDetails($positionId) {
    global $connection;

    // Fetch data for the specific position from the `Position` table
    $sql = "SELECT * FROM `Position` WHERE PositionID = :positionId";
    $stmt = $connection->prepare($sql);
    $stmt->bindParam(':positionId', $positionId, PDO::PARAM_STR);
    $stmt->execute();

    // Fetch the result
    $position = $stmt->fetch(PDO::FETCH_ASSOC);

    // Close the database connection
    $stmt->closeCursor();

    // Return the result
    return $position;
}

// Assuming your database connection is established, you can proceed to fetch position details
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Get the PositionID from the query string
        $positionId = isset($_GET['PositionID']) ? $_GET['PositionID'] : '';

        if (empty($positionId)) {
            // Handle missing PositionID
            $response = array('status' => 'error', 'message' => 'PositionID is required.');
        } else {
            // Fetch position details from the database
            $position = getPositionDetails($positionId);

            if ($position) {
                // Return the position details as JSON response
                $response = array('status' => 'success', 'position' => $position);
            } else {
                $response = array('status' => 'error', 'message' => 'Position not found.');
            }
        }

        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch position details: ' . $e->getMessage());
        echo json_encode($response);
    }
}
?>
