<?php
// Ensure the response is identified as JSON
header('Content-Type: application/json');

// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch details of a specific officer from the database
function getOfficerDetails($officerID) {
    global $connection;

    // Fetch officer details from the `Officers` table for the given OfficerID
    $sql = "SELECT * FROM `Officers` WHERE OfficerID = :officerID";
    $stmt = $connection->prepare($sql);
    $stmt->bindParam(':officerID', $officerID, PDO::PARAM_STR);
    $stmt->execute();

    // Fetch the result
    $officerDetails = $stmt->fetch(PDO::FETCH_ASSOC);

    // Close the database connection
    $stmt->closeCursor();

    // Return the result
    return $officerDetails;
}

// Assuming your database connection is established, you can proceed to fetch officer details
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        if (isset($_GET['officerID'])) {
            $officerID = $_GET['officerID'];

            // Fetch officer details from the database
            $officerDetails = getOfficerDetails($officerID);

            if ($officerDetails) {
                // Return the results as JSON response
                $response = array('status' => 'success', 'officerDetails' => $officerDetails);
                echo json_encode($response);
            } else {
                $response = array('status' => 'error', 'message' => 'Officer not found.');
                echo json_encode($response);
            }
        } else {
            $response = array('status' => 'error', 'message' => 'Missing officerID parameter.');
            echo json_encode($response);
        }
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch officer details: ' . $e->getMessage());
        echo json_encode($response);
    }
}
?>
