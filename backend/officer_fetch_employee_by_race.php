<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch all races and their respective employee counts from the `Employee` table
function getEmployeeCountByRace() {
    global $connection;

    // Fetch all races and their respective employee counts
    $sql = "SELECT Race, COUNT(*) as employee_count FROM `Employee` GROUP BY Race";
    $stmt = $connection->prepare($sql);
    $stmt->execute();

    // Fetch the results
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Close the database connection
    $stmt->closeCursor();

    // Return the results
    return $results;
}

// Assuming your database connection is established, you can proceed to fetch the employee counts by race
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch the employee counts by race
        $raceCounts = getEmployeeCountByRace();

        // Return the results as JSON response
        $response = array('status' => 'success', 'race_counts' => $raceCounts);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch employee counts by race: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
