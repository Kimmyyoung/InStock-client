
const validatePhoneNumber = (phoneNumber) => {
    return /^\+\d{1,2}\s\(\d{3}\)\s\d{1,4}-\d{1,4}$/.test(phoneNumber);
};

const validateEmail = (email) => {
    // You can use a library like validator to perform more comprehensive email validation
    return /\S+@\S+\.\S+/.test(email);
};



export {
    validatePhoneNumber,
    validateEmail
};
