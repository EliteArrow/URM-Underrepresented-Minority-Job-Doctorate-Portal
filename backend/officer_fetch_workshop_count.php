<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch total count of workshops from the database
function getTotalWorkshopsCount() {
    global $connection;

    // Fetch total count of workshops from the `Workshops` table
    $sql = "SELECT COUNT(*) as total FROM `Workshops`";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    
    // Fetch the count result
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Close the database connection
    $stmt->closeCursor();

    // Return the total count of workshops
    return $result['total'];
}

// Assuming your database connection is established, you can proceed to fetch the workshops count
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch the total count of workshops from the database
        $totalWorkshops = getTotalWorkshopsCount();

        // Return the count as JSON response
        $response = array('status' => 'success', 'total_workshops' => $totalWorkshops);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch workshops count: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
