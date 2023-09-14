<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch the count of total employees from the `Employee` table
function getTotalEmployeeCount() {
    global $connection;

    // Fetch the count of total employees from the `Employee` table
    $sql = "SELECT COUNT(*) as total_count FROM `Employee`";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    
    // Fetch the result
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Close the database connection
    $stmt->closeCursor();

    // Return the count of total employees
    return $result['total_count'];
}

// Assuming your database connection is established, you can proceed to fetch the total employee count
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch the count of total employees
        $totalEmployees = getTotalEmployeeCount();

        // Return the count as JSON response
        $response = array('status' => 'success', 'total_employees' => $totalEmployees);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch total employee count: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
