<?php
// Include your database connection file here
include 'db_connection.php';

// Assuming you have already established a connection to the database

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the profile data from the request
    $userID = $_POST['userID'];
    $name = $_POST['pName'];
    $email = $_POST['pEmail'];
    $password = $_POST['pPassword'];
    $address = $_POST['pAddress'];
    $phoneNumber = $_POST['pPhoneNumber'];
    $fieldOfStudy = $_POST['pFieldOfStudy'];
    $education = $_POST['pEducation'];
    $experience = $_POST['pExperience'];
    $dateOfBirth = $_POST['pDateOfBirth'];
    $summary = $_POST['pSummary'];
    $isURM = 1;
    $race = $_POST['pRace'];

    $resumeFileName = basename($_FILES['pResume']['name']);
    $cvFileName = basename($_FILES['pCV']['name']);
    $academicRecordsFileName = basename($_FILES['pAcademicRecords']['name']);

    // Set the paths to store the uploaded files
    $resumePath = '../uploads/resumes/';
    $cvPath = '../uploads/cvs/';
    $academicRecordsPath = '../uploads/academic_records/'; 

    $resumeTargetPath = $resumePath . $resumeFileName;
    $cvTargetPath = $cvPath . $cvFileName;
    $academicRecordsTargetPath = $academicRecordsPath . $academicRecordsFileName;

    if (move_uploaded_file($_FILES['pResume']['tmp_name'], $resumeTargetPath) ||
        move_uploaded_file($_FILES['pCV']['tmp_name'], $cvTargetPath) ||
        move_uploaded_file($_FILES['pAcademicRecords']['tmp_name'], $academicRecordsTargetPath)) {

        // Update the user's profile data in the `Candidates` table with the given userID
        $query = "UPDATE `Candidates` SET 
                    `Name` = :name,
                    `Email` = :email,
                    `Password` = :password,
                    `Address` = :address,
                    `Phone_Number` = :phoneNumber,
                    `Field_Of_Study` = :fieldOfStudy,
                    `Education` = :education,
                    `Experience` = :experience,
                    `Date_Of_Birth` = :dateOfBirth,
                    `Summary` = :summary,
                    `IsURM` = :isURM,
                    `Race` = :race,
                    `Resume` = :resume,
                    `CV` = :cv,
                    `AcademicRecords` = :academicRecords
                  WHERE `CandidateID` = :userID";

        $stmt = $connection->prepare($query);
        $stmt->bindParam(':userID', $userID);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':address', $address);
        $stmt->bindParam(':phoneNumber', $phoneNumber);
        $stmt->bindParam(':fieldOfStudy', $fieldOfStudy);
        $stmt->bindParam(':education', $education);
        $stmt->bindParam(':experience', $experience);
        $stmt->bindParam(':dateOfBirth', $dateOfBirth);
        $stmt->bindParam(':summary', $summary);
        $stmt->bindParam(':isURM', $isURM);
        $stmt->bindParam(':race', $race);
        $stmt->bindParam(':resume', $resumeTargetPath);
        $stmt->bindParam(':cv', $cvTargetPath);
        $stmt->bindParam(':academicRecords', $academicRecordsTargetPath);

        if ($stmt->execute()) {
            // Profile data updated successfully
            $response = array(
                'status' => 'success',
                'message' => 'Profile data updated successfully',
            );
        } else {
            // An error occurred while updating the profile data
            $response = array(
                'status' => 'error',
                'message' => 'Failed to update profile data',
            );
        }

        $stmt->closeCursor();
    } else {
        // An error occurred while uploading the files
        $response = array(
            'status' => 'error',
            'message' => 'Failed to upload files',
        );
    }
} else {
    $response = array(
        'status' => 'error',
        'message' => 'Invalid request method',
    );
}

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
