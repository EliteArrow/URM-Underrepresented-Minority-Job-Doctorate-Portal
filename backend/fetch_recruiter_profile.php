<?php
// Include your database connection file here
include 'db_connection.php';

// Assuming you have already established a connection to the database

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the userID from the request
    $data = json_decode(file_get_contents('php://input'), true);
    $userID = $data['userId'];

    // Fetch the user's profile data based on the userID
    $query = "SELECT * FROM `Recruiters` WHERE `RecruiterID` = :userID";
    $stmt = $connection->prepare($query);
    $stmt->bindParam(':userID', $userID); // Corrected the parameter name here

    if ($stmt->execute()) {
        // Fetch the user's profile data successfully
        $profileData = $stmt->fetch(PDO::FETCH_ASSOC);

        $response = array(
            'status' => 'success',
            'profileData' => $profileData,
        );
    } else {
        // An error occurred while fetching the profile data
        $response = array(
            'status' => 'error',
            'message' => 'Failed to fetch profile data',
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
