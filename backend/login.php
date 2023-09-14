<?php
// Include the database connection file
include 'db_connection.php';

// Get login data from the Axios POST request in the React app
$data = json_decode(file_get_contents('php://input'), true);

$type = $data['type'];
$email = $data['email'];
$password = $data['password'];

// Determine the table based on the selected 'type'
$table = '';
switch ($type) {
    case 'candidate':
        $table = 'Candidates';
        break;
    case 'institute':
        $table = 'Institutes';
        break;
    case 'recruiter':
        $table = 'Recruiters';
        break;
    case 'officer':
        $table = 'Officers';
        break;
    case 'admin':
        $table = 'Admins';
        break;
    default:
        // Handle any other cases if needed
        break;
}

// Perform necessary validation and database operations to check user's credentials
// For example, assuming your users table has fields 'email' and 'password'
$query = "SELECT * FROM $table WHERE Email = :email AND Password = :password";
$stmt = $connection->prepare($query);
$stmt->execute(array(':email' => $email, ':password' => $password));
$user = $stmt->fetch(PDO::FETCH_ASSOC);

// Respond with a JSON object indicating the result of the login attempt
if ($user) {
    // Store the user data in the session
    session_start();
    $_SESSION['user_data'] = $user;
    
    $response = array('status' => 'success', 'message' => 'Login successful', 'type'=> $type, 'userData' => $user);
} else {
    $response = array('status' => 'error', 'message' => 'Invalid credentials');
}

header('Content-Type: application/json');
echo json_encode($response);
?>
