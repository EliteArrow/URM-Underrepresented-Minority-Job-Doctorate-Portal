<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch the count of unique departments from the `Employee` table
function getTotalDepartmentCount() {
    global $connection;

    // Fetch the count of unique departments from the `Employee` table
    $sql = "SELECT COUNT(DISTINCT DepartmentID) as total_departments FROM `Employee`";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    
    // Fetch the result
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Close the database connection
    $stmt->closeCursor();

    // Return the count of unique departments
    return $result['total_departments'];
}

// Assuming your database connection is established, you can proceed to fetch the total department count
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch the count of unique departments
        $totalDepartments = getTotalDepartmentCount();

        // Return the count as JSON response
        $response = array('status' => 'success', 'total_departments' => $totalDepartments);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch total department count: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
