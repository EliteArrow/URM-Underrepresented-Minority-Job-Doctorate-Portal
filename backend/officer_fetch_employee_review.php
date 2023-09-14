<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to fetch employee reviews along with department names
function getEmployeeReviewsWithDepartmentName() {
    global $connection;

    // Join Employee_Reviews and Employee_Departments to fetch the required data
    $sql = "
        SELECT er.EmployeeID, er.Name, ed.Department_Name, er.Rating, er.Date, er.Comment
        FROM `Employee_Reviews` er
        LEFT JOIN `Employee_Departments` ed ON er.DepartmentID = ed.DepartmentID
        ORDER BY er.Date DESC
        LIMIT 10
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

// Assuming your database connection is established, you can proceed to fetch the reviews and their corresponding department names
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        // Fetch the reviews and department names
        $reviews = getEmployeeReviewsWithDepartmentName();

        // Return the results as a JSON response
        $response = array('status' => 'success', 'reviews' => $reviews);
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Failed to fetch reviews and department names: ' . $e->getMessage());
        echo json_encode($response);
    }
}

// Ensure the response is identified as JSON
header('Content-Type: application/json');

?>
