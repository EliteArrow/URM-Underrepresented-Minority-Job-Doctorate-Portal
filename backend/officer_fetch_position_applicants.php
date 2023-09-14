<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to get the applicant data for a particular position
function getApplicantsForPosition($positionId) {
    global $connection;

    // Fetch the applicant data joined with candidate data for the specified position
    $sql = "SELECT a.ApplicationID, a.Date_Applied, a.Status, a.Comments, c.*
            FROM `Application` a
            INNER JOIN `Candidates` c ON a.CandidateID = c.CandidateID
            WHERE a.PositionID = :positionId";

    $stmt = $connection->prepare($sql);
    $stmt->bindParam(':positionId', $positionId, PDO::PARAM_STR);
    $stmt->execute();

    // Fetch the results
    $applicants = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Close the database connection
    $stmt->closeCursor();

    // Return the results
    return $applicants;
}

// Assuming your database connection is established, you can proceed to handle the POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Retrieve PositionID from POST request
    $positionId = $data['PositionID'];

    try {
        // Fetch applicants for the specified position
        $applicants = getApplicantsForPosition($positionId);

        // Return the results as JSON response
        $response = array('status' => 'success', 'applicants' => $applicants);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch applicants: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
