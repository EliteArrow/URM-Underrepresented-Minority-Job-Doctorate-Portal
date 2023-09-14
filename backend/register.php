<?php
// Include your database connection file here
include 'db_connection.php';

// Assuming your database connection is established, you can proceed with the registration process
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get registration data from the Axios POST request in the React app
    $data = json_decode(file_get_contents('php://input'), true);

    // Receive POST data from frontend
    $name = $data['name'];
    $email = $data['email'];
    $phoneNumber = $data['phoneNumber'];
    $password = $data['password'];

    // Validate the received data here if needed

    // Generate the next auto-incremented OfficerID
    $sqlGetMaxOfficerID = "SELECT MAX(CAST(SUBSTRING(OfficerID, 2) AS UNSIGNED)) AS maxOfficerID FROM Officers";
    $stmtMaxOfficerID = $connection->prepare($sqlGetMaxOfficerID);
    $stmtMaxOfficerID->execute();
    $maxOfficerIDRow = $stmtMaxOfficerID->fetch(PDO::FETCH_ASSOC);
    $nextOfficerIDNumber = $maxOfficerIDRow['maxOfficerID'] + 1;
    $nextOfficerID = 'O' . str_pad($nextOfficerIDNumber, 3, '0', STR_PAD_LEFT);

    // Insert officer data into the Officers table
    $sqlInsertOfficer = "INSERT INTO Officers (OfficerID, Name, Email, Phone_Number, Password) VALUES (:officerID, :name, :email, :phoneNumber, :password)";
    $stmtInsertOfficer = $connection->prepare($sqlInsertOfficer);
    $stmtInsertOfficer->bindValue(':officerID', $nextOfficerID, PDO::PARAM_STR);
    $stmtInsertOfficer->bindValue(':name', $name, PDO::PARAM_STR);
    $stmtInsertOfficer->bindValue(':email', $email, PDO::PARAM_STR);
    $stmtInsertOfficer->bindValue(':phoneNumber', $phoneNumber, PDO::PARAM_STR);
    $stmtInsertOfficer->bindValue(':password', $password, PDO::PARAM_STR);

    if ($stmtInsertOfficer->execute()) {
        // Registration successful
        $response = array('status' => 'success', 'message' => 'Registration successful.');
        echo json_encode($response);
    } else {
        // Registration failed
        $response = array('status' => 'error', 'message' => 'Registration failed. Please try again later.');
        echo json_encode($response);
    }

    // Close the database connection and exit
    $stmtInsertOfficer->closeCursor();
    // Example: $connection = null;
    exit;
}
?>
