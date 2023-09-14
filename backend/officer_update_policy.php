<?php
// db_connection.php - Include your database connection file here
include 'db_connection.php';

// Function to update policy data in the database
function updatePolicyInDatabase($policyId, $policyTitle, $policyText) {
    global $connection;

    // Update policy data in the `Policy` table
    $sql = "UPDATE `Policy` SET Policy_Title = :policyTitle, Policy = :policyText WHERE PolicyID = :policyId";
    $stmt = $connection->prepare($sql);
    $stmt->bindParam(':policyTitle', $policyTitle, PDO::PARAM_STR);
    $stmt->bindParam(':policyText', $policyText, PDO::PARAM_STR);
    $stmt->bindParam(':policyId', $policyId, PDO::PARAM_INT);
    
    $result = $stmt->execute();

    // Close the database connection
    $stmt->closeCursor();
    return $result;
}

// Assuming your database connection is established, you can proceed to handle the POST request to update the policy
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Retrieve data from POST request
    $policyId = $data['PolicyID'];
    $policyTitle = $data['Policy_Title'];
    $policyText = $data['Policy'];

    try {
        // Update policy data in the database
        $result = updatePolicyInDatabase($policyId, $policyTitle, $policyText);

        // Check the result of the update operation
        if ($result) {
            $response = array('status' => 'success', 'message' => 'Policy updated successfully.');
        } else {
            $response = array('status' => 'error', 'message' => 'Failed to update policy.');
        }
        
        echo json_encode($response);
    } catch (PDOException $e) {
        // Handle any database connection or query errors
        $response = array('status' => 'error', 'message' => 'Database error: ' . $e->getMessage());
        echo json_encode($response);
    }
    // Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
}
?>