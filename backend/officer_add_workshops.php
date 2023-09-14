<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to get the next WorkshopID
function getNextWorkshopID() {
    global $connection;

    $sql = "SELECT WorkshopID FROM `Workshops` ORDER BY WorkshopID DESC LIMIT 1";
    $stmt = $connection->query($sql);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($row) {
        $lastID = $row['WorkshopID'];
        $numericPart = intval(substr($lastID, 1));  // Extract numeric portion after "W"
        return 'W' . ($numericPart + 1);
    } else {
        return 'W1';
    }
}

// Function to insert a new workshop into the `Workshops` table
function insertWorkshop($workshopData) {
    global $connection;

    // Insert new workshop into the `Workshops` table
    $sql = "INSERT INTO `Workshops` (WorkshopID, Date_Time, Leader, Location, Topic, Status) 
            VALUES (:WorkshopID, :Date_Time, :Leader, :Location, :Topic, :Status)";
    
    $stmt = $connection->prepare($sql);
    $workshopData['WorkshopID'] = getNextWorkshopID();
    $stmt->bindParam(':WorkshopID', $workshopData['WorkshopID'], PDO::PARAM_STR);
    $stmt->bindParam(':Date_Time', $workshopData['Date_Time'], PDO::PARAM_STR);
    $stmt->bindParam(':Leader', $workshopData['Leader'], PDO::PARAM_STR);
    $stmt->bindParam(':Location', $workshopData['Location'], PDO::PARAM_STR);
    $stmt->bindParam(':Topic', $workshopData['Topic'], PDO::PARAM_STR);
    $stmt->bindParam(':Status', $workshopData['Status'], PDO::PARAM_STR);
    
    $result = $stmt->execute();
    
    // Close the database connection
    $stmt->closeCursor();
    
    // Return the result of the insertion
    return $result;
}

// Assuming your database connection is established, you can proceed to handle the POST request to insert the workshop
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    try {
        // Insert the workshop data into the database
        $result = insertWorkshop($data);

        // Check the result of the insertion
        if ($result) {
            $response = array('status' => 'success', 'message' => 'Workshop added successfully.');
        } else {
            $response = array('status' => 'error', 'message' => 'Failed to add workshop.');
        }

        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Database error: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
