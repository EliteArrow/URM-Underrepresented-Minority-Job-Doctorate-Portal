<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch all data from the `Workshops` table
function getAllWorkshops() {
    global $connection;

    // Fetch all data from the `Workshops` table
    $sql = "SELECT * FROM `Workshops`";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    
    // Fetch the results
    $workshops = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Close the database connection
    $stmt->closeCursor();

    // Return all the data from the `Workshops` table
    return $workshops;
}

// Assuming your database connection is established, you can proceed to fetch all the workshops data
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch all data from the `Workshops` table
        $allWorkshops = getAllWorkshops();

        // Return the data as JSON response
        $response = array('status' => 'success', 'workshops' => $allWorkshops);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch all workshops data: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
