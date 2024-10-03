const patterns = {
    telephone: /^[0-9]{10}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@#!$%^&*()-]{8,20}$/i,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

export const validateSignIn = (email, password) => {
    const emailTest = patterns.email.test(email);
    const passwordTest = patterns.password.test(password);

    if(!emailTest) return "email";
    if(!passwordTest) return "password";
    
    return null;
}

export const validateSignUp = (email, password, phone, username) => {
    const emailTest = patterns.email.test(email);
    const passwordTest = patterns.password.test(password);
    const phoneTest = patterns.telephone.test(phone);
    const usernameTest = patterns.username.test(username);
    
    if(!emailTest) return "email";
    if(!passwordTest) return "password";
    if(!phoneTest) return "password";
    if(!usernameTest) return "password";

    return null;
}

export const validateEmail = (email) => {
    return patterns.email.test(email);
}

export const validatePassword = (password) => {
    return patterns.password.test(password);
}

export const validateUsername = (username) => {
    return patterns.username.test(username);
}

export const validatePhone = (phone) => {
    return patterns.telephone.test(phone);
}