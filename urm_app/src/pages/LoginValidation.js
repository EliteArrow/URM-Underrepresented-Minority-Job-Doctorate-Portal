const LoginValidation = (values) => {
    const errors = {};

    const trimmedType = values.type?.trim();
    const trimmedEmail = values.email?.trim();
    const trimmedPassword = values.password?.trim();

    // Type Validation
    if (!trimmedType) {
        errors.type = "Login type is required";
    }

    // Email Validation
    if (!trimmedEmail) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
        errors.email = "Invalid email format";
    }

    // Password Validation
    if (!trimmedPassword) {
        errors.password = "Password is required";
    }

    return errors;
};

export default LoginValidation;
