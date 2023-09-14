<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch employee counts by race for each department from the `Employee` table
function getEmployeeCountByRaceAndDepartment() {
    global $connection;

    // Fetch employee counts by race for each department
    $sql = "
        SELECT DepartmentID, Race, COUNT(*) as count
        FROM `Employee`
        GROUP BY DepartmentID, Race
        ORDER BY DepartmentID, Race
    ";
    $stmt = $connection->prepare($sql);
    $stmt->execute();

    // Fetch the results
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Close the database connection
    $stmt->closeCursor();

    // Return the results
    return $results;
}

// Assuming your database connection is established, you can proceed to fetch the employee counts by race and department
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch the employee counts by race for each department
        $counts = getEmployeeCountByRaceAndDepartment();

        // Return the results as JSON response
        $response = array('status' => 'success', 'counts' => $counts);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch employee counts by race and department: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
