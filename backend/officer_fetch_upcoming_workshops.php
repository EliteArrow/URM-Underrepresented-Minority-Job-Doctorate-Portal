<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch all data of workshops with "Status" set to "Upcoming"
function getUpcomingWorkshops() {
    global $connection;

    // Fetch all data of workshops with "Status" set to "Upcoming" from the `Workshops` table
    $sql = "SELECT * FROM `Workshops` WHERE `Status` = 'Upcoming'";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    
    // Fetch the results
    $workshops = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Close the database connection
    $stmt->closeCursor();

    // Return the data of workshops with "Status" set to "Upcoming"
    return $workshops;
}

// Assuming your database connection is established, you can proceed to fetch the upcoming workshops data
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch all data of workshops with "Status" set to "Upcoming"
        $upcomingWorkshops = getUpcomingWorkshops();

        // Return the data as JSON response
        $response = array('status' => 'success', 'upcoming_workshops' => $upcomingWorkshops);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch upcoming workshops data: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
