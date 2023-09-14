<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch employee counts by gender from the `Employee` table
function getEmployeeCountByGender() {
    global $connection;

    // Fetch employee counts by gender
    $sql = "
        SELECT Gender, COUNT(*) as count
        FROM `Employee`
        GROUP BY Gender
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

// Assuming your database connection is established, you can proceed to fetch the employee counts by gender
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch the employee counts by gender
        $genderCounts = getEmployeeCountByGender();

        // Return the results as JSON response
        $response = array('status' => 'success', 'gender_counts' => $genderCounts);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch employee counts by gender: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
