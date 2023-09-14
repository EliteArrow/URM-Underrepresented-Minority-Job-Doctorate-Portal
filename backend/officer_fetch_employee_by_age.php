<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch employee counts by age groups from the `Employee` table
function getEmployeeCountByAgeGroup() {
    global $connection;

    // Fetch employee counts by age groups
    $sql = "
        SELECT
            SUM(CASE WHEN Age BETWEEN 18 AND 24 THEN 1 ELSE 0 END) AS '18-24',
            SUM(CASE WHEN Age BETWEEN 25 AND 34 THEN 1 ELSE 0 END) AS '25-34',
            SUM(CASE WHEN Age BETWEEN 35 AND 44 THEN 1 ELSE 0 END) AS '35-44',
            SUM(CASE WHEN Age BETWEEN 45 AND 54 THEN 1 ELSE 0 END) AS '45-54',
            SUM(CASE WHEN Age >= 55 THEN 1 ELSE 0 END) AS '55+'
        FROM `Employee`
    ";
    $stmt = $connection->prepare($sql);
    $stmt->execute();

    // Fetch the results
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    // Close the database connection
    $stmt->closeCursor();

    // Return the results
    return $result;
}

// Assuming your database connection is established, you can proceed to fetch the employee counts by age groups
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch the employee counts by age groups
        $ageGroupCounts = getEmployeeCountByAgeGroup();

        // Return the results as JSON response
        $response = array('status' => 'success', 'age_group_counts' => $ageGroupCounts);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch employee counts by age groups: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
