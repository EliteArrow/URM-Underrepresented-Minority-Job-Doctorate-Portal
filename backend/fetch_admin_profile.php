<?php
// Include your database connection file here
include 'db_connection.php';

// Assuming you have already established a connection to the database

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);

    $userID = $data['userId'];

    // Fetch the Admin's profile data from the `Admins` table with the given userID
    $query = "SELECT * FROM `Admins` WHERE `AdminID` = :userID";
    $stmt = $connection->prepare($query);
    $stmt->bindParam(':userID', $userID);
    $stmt->execute();

    $profileData = $stmt->fetch(PDO::FETCH_ASSOC);
    $stmt->closeCursor();

    if ($profileData) {
        $response = array(
            'status' => 'success',
            'profileData' => $profileData,
        );
    } else {
        $response = array(
            'status' => 'error',
            'message' => 'Admin profile data not found',
        );
    }
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
