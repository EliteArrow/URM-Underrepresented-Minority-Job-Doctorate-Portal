<?php

// Enable CORS by including the enable_cors.php file
include 'enable_cors.php';

// Replace these with your actual database credentials
$host = 'localhost:3306';
$dbname = 'mcn0672_wdm_db';
$username = 'mcn0672_admin';
$password = 'JemsBond007';

try {
    $connection = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Database connection failed, respond with an error message
    $response = array('status' => 'error', 'message' => 'Database connection failed: ' . $e->getMessage());
    http_response_code(500); // Internal Server Error
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}


// class Database
// {
//     private $server_name = 'localhost:3306';
//     private $database_username = 'jxg0437_admin';
//     private $database_password = 'Suryaadmin!23';
//     private $database_name = 'jxg0437_urm_app_db';
//     private $connection = null;

//     public function register($user)
//     {
//         $this->connection = new mysqli(
//             $this->server_name,
//             $this->database_username,
//             $this->database_password,
//             $this->database_name
//         );
//         $this->connection->set_charset('utf8');

//         $tableName = '';
//         switch ($user['type']) {
//             case 'candidate':
//                 $tableName = 'Candidates';
//                 break;
//             case 'institute':
//                 $tableName = 'Institutes';
//                 break;
//             case 'recruiter':
//                 $tableName = 'Recruiters';
//                 break;
//             case 'officer':
//                 $tableName = 'Officers';
//                 break;
//             case 'admin':
//                 $tableName = 'Admins';
//                 break;
//             default:
//                 // Handle the case where an invalid type is provided (optional)
//                 return false;
//         }

//         $sql = "INSERT INTO $tableName (`name`, `email`, `phoneNumber`, `password`, `status`) VALUES (?, ?, ?, ?, ?)";
//         $stmt = $this->connection->prepare($sql);
//         $stmt->bind_param(
//             'sssssis',
//             $user['name'],
//             $user['email'],
//             $user['phoneNumber'],
//             $user['status'],
//             $user['password']
//         );

//         if ($stmt->execute()) {
//             $id = $this->connection->insert_id;
//             $stmt->close();
//             $this->connection->close();
//             return $id;
//         } else {
//             $stmt->close();
//             $this->connection->close();
//             return false;
//         }
//     }


//     public function generateConfirmCode($user_id)
//     {
//         $this->connection = new mysqli(
//             $this->server_name,
//             $this->database_username,
//             $this->database_password,
//             $this->database_name
//         );
//         $this->connection->set_charset('utf8');
//         $sql = $this->connection->prepare(
//             'INSERT INTO `accountconfirm`(`user_id`, `code`) VALUES(?,?) ON DUPLICATE KEY UPDATE    
//             code=?'
//         );
//         $code = rand(11111, 99999);
//         $sql->bind_param('iss', $user_id, $code, $code);
//         if ($sql->execute()) {
//             $sql->close();
//             $this->connection->close();
//             return $code;
//         }
//         $sql->close();
//         $this->connection->close();
//         return false;
//     }

//     public function confirmCode($user_id, $code)
//     {
//         $this->connection = new mysqli(
//             $this->server_name,
//             $this->database_username,
//             $this->database_password,
//             $this->database_name
//         );
//         $this->connection->set_charset('utf8');
//         $sql = $this->connection->prepare(
//             'SELECT * FROM `accountconfirm` WHERE user_id=? AND code=?'
//         );
//         $sql->bind_param('is', $user_id, $code);
//         $sql->execute();
//         $result = $sql->get_result();
//         if ($result->num_rows > 0) {
//             $sql->close();
//             $this->connection->close();
//             return true;
//         }
//         $sql->close();
//         $this->connection->close();
//         return false;
//     }

//     public function activeUser($user_id, $userType)
//     {
//         $this->connection = new mysqli(
//             $this->server_name,
//             $this->database_username,
//             $this->database_password,
//             $this->database_name
//         );

//         $this->connection->set_charset('utf8');

//         $tableName = '';
//         switch ($userType) {
//             case 'candidate':
//                 $tableName = 'Candidates';
//                 break;
//             case 'institute':
//                 $tableName = 'Institutes';
//                 break;
//             case 'recruiter':
//                 $tableName = 'Recruiters';
//                 break;
//             case 'officer':
//                 $tableName = 'Officers';
//                 break;
//             case 'admin':
//                 $tableName = 'Admins';
//                 break;
//             default:
//                 // Handle the case where an invalid type is provided (optional)
//                 return false;
//         }

//         $sql = $this->connection->prepare(
//             'UPDATE `' . $tableName . '` SET `status` = 1 WHERE id=?'
//         );

//         $sql->bind_param('i', $user_id);
//         if ($sql->execute()) {
//             $sql->close();
//             $this->connection->close();
//             return true;
//         }
//         $sql->close();
//         $this->connection->close();
//         return false;
//     }


//     public function loginUser($username, $password, $userType)
//     {
//         $this->connection = new mysqli(
//             $this->server_name,
//             $this->database_username,
//             $this->database_password,
//             $this->database_name
//         );

//         $this->connection->set_charset('utf8');

//         $tableName = '';
//         switch ($userType) {
//             case 'candidate':
//                 $tableName = 'Candidates';
//                 break;
//             case 'institute':
//                 $tableName = 'Institutes';
//                 break;
//             case 'recruiter':
//                 $tableName = 'Recruiters';
//                 break;
//             case 'officer':
//                 $tableName = 'Officers';
//                 break;
//             case 'admin':
//                 $tableName = 'Admins';
//                 break;
//             default:
//                 // Handle the case where an invalid type is provided (optional)
//                 return false;
//         }

//         $sql = $this->connection->prepare(
//             'SELECT * FROM `' . $tableName . '` WHERE email=? AND password=?'
//         );
//         $sql->bind_param('ss', $username, $password);
//         $sql->execute();
//         $result = $sql->get_result();
//         if ($result->num_rows > 0) {
//             $user = $result->fetch_assoc();
//             $sql->close();
//             $this->connection->close();
//             return $user;
//         }
//         $sql->close();
//         $this->connection->close();
//         return false;
//     }

//     public function getUserByUsernameOrEmail($email, $userType)
//     {
//         $this->connection = new mysqli(
//             $this->server_name,
//             $this->database_username,
//             $this->database_password,
//             $this->database_name
//         );

//         $this->connection->set_charset('utf8');

//         $tableName = '';
//         switch ($userType) {
//             case 'candidate':
//                 $tableName = 'Candidates';
//                 break;
//             case 'institute':
//                 $tableName = 'Institutes';
//                 break;
//             case 'recruiter':
//                 $tableName = 'Recruiters';
//                 break;
//             case 'officer':
//                 $tableName = 'Officers';
//                 break;
//             case 'admin':
//                 $tableName = 'Admins';
//                 break;
//             default:
//                 // Handle the case where an invalid type is provided (optional)
//                 return false;
//         }

//         $sql = $this->connection->prepare(
//             'SELECT * FROM `' . $tableName . '` WHERE email=?'
//         );

//         $sql->bind_param('s', $email);
//         $sql->execute();
//         $result = $sql->get_result();
//         if ($result->num_rows > 0) {
//             $user = $result->fetch_assoc();
//             $sql->close();
//             $this->connection->close();
//             return $user;
//         }
//         $sql->close();
//         $this->connection->close();
//         return false;
//     }

//     public function updateUser($email, $userType, $newPassword)
//     {
//         $this->connection = new mysqli(
//             $this->server_name,
//             $this->database_username,
//             $this->database_password,
//             $this->database_name
//         );
//         $this->connection->set_charset('utf8');
        
//         $tableName = '';
//         switch ($userType) {
//             case 'candidate':
//                 $tableName = 'Candidates';
//                 break;
//             case 'institute':
//                 $tableName = 'Institutes';
//                 break;
//             case 'recruiter':
//                 $tableName = 'Recruiters';
//                 break;
//             case 'officer':
//                 $tableName = 'Officers';
//                 break;
//             case 'admin':
//                 $tableName = 'Admins';
//                 break;
//             default:
//                 // Handle the case where an invalid type is provided (optional)
//                 return false;
//         }

//         $sql = $this->connection->prepare(
//             'UPDATE `' . $tableName . '` SET `password` = ? WHERE email = ?'
//         );

//         $sql->bind_param('ss', $newPassword, $email);
//         if ($sql->execute()) {
//             $sql->close();
//             $this->connection->close();
//             return true;
//         }
//         $sql->close();
//         $this->connection->close();
//         return false;
//     }


// }
?>
