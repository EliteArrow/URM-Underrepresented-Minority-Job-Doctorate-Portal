<?php
include 'db_connection.php';

function updateStatusInPositionTable($positionId, $status) {
    global $connection;

    $sql = "UPDATE `Position` SET Status = :status WHERE PositionID = :positionId";
    $stmt = $connection->prepare($sql);
    $stmt->bindParam(':status', $status, PDO::PARAM_STR);
    $stmt->bindParam(':positionId', $positionId, PDO::PARAM_STR);
    
    $result = $stmt->execute();
    return $result;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');

    $data = json_decode(file_get_contents('php://input'), true);

    // Validate the incoming data
    if (!isset($data['PositionID'], $data['Status'])) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
        exit;
    }

    $positionId = $data['PositionID'];
    $status = $data['Status'];

    try {
        $result = updateStatusInPositionTable($positionId, $status);
        if ($result) {
            $response = ['status' => 'success', 'message' => 'Position status updated successfully.'];
        } else {
            $response = ['status' => 'error', 'message' => 'Failed to update position status.'];
        }
    } catch (PDOException $e) {
        $response = ['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()];
    }

    echo json_encode($response);
}
?>
