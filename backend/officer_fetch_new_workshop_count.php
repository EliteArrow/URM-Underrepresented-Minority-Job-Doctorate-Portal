<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch count of workshops with "Status" set to "Upcoming"
function getUpcomingWorkshopsCount() {
    global $connection;

    // Fetch count of workshops with "Status" set to "Upcoming" from the `Workshops` table
    $sql = "SELECT COUNT(*) as total FROM `Workshops` WHERE `Status` = 'Upcoming'";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    
    // Fetch the count result
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Close the database connection
    $stmt->closeCursor();

    // Return the count of workshops with "Status" set to "Upcoming"
    return $result['total'];
}

// Assuming your database connection is established, you can proceed to fetch the workshops count
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch the count of workshops with "Status" set to "Upcoming"
        $upcomingWorkshops = getUpcomingWorkshopsCount();

        // Return the count as JSON response
        $response = array('status' => 'success', 'upcoming_workshops' => $upcomingWorkshops);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch upcoming workshops count: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
