const validateForm = (formData) => {
    let valid = true;
    const newFormErrors = {
        email: "",
        password: "",
        confirmPassword: "",
      };

    // Email validation
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newFormErrors.email = "Invalid email address";
        valid = false;
    } else {
        newFormErrors.email = "";
    }

    // Password validation
    if (!formData.password || formData.password.length < 6) {
        newFormErrors.password = "Password must be at least 6 characters long";
        valid = false;
    } else {
        newFormErrors.password = "";
    }

    // Confirm Password validation
    if (formData.confirmPassword !== formData.password) {
        newFormErrors.confirmPassword = "Passwords do not match";
        valid = false;
    } else {
        newFormErrors.confirmPassword = "";
    }

    return {valid , newFormErrors};
};

export {validateForm};