<?php
// Include your database connection file here
include 'db_connection.php';

// Assuming you have already established a connection to the database

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $userID = $_POST['userID'];
    $name = $_POST['pName'];
    $email = $_POST['pEmail'];
    $password = $_POST['pPassword'];
    $phoneNumber = $_POST['pPhoneNumber'];

    // Update the Admin's profile data in the `Admins` table with the given userID
    $query = "UPDATE `Admins` SET 
                `Name` = :name,
                `Email` = :email,
                `Password` = :password,
                `Phone_Number` = :phoneNumber
              WHERE `AdminID` = :userID";

    $stmt = $connection->prepare($query);
    $stmt->bindParam(':userID', $userID);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->bindParam(':phoneNumber', $phoneNumber);

    if ($stmt->execute()) {
        // Profile data updated successfully
        $response = array(
            'success' => true,
            'message' => 'Profile data updated successfully',
        );
    } else {
        // An error occurred while updating the profile data
        $response = array(
            'success' => false,
            'message' => 'Failed to update profile data',
        );
    }

    $stmt->closeCursor();
} else {
    $response = array(
        'success' => false,
        'message' => 'Invalid request method',
    );
}

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
