export const validateLoginForm = ({ mail, password }) => {
  const isMailValid = ValidateEmail(mail);
  const isPasswordValid = ValidatePassword(password);
  return isMailValid && isPasswordValid;
};
export const validateRegisterForm = ({ mail, username, password }) => {
  return (
    ValidateEmail(mail) &&
    ValidatePassword(password) &&
    isUsernameValid(username)
  );
};

const ValidatePassword = (password) => {
  return password.length > 5 && password.length < 12;
};
export const ValidateEmail = (mail) => {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailPattern.test(mail);
};

const isUsernameValid = (username) => {
  return username.length > 2 && username.length < 13;
};
