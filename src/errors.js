const errorMap = {
  signup: {
    email: {
      "This field may not be blank.": "Email cannot be blank",
      "Enter a valid email address.": "Email address invalid",
      "A user is already registered with this e-mail address.":
        "Account with this email address already exists"
    },
    username: {
      "This field may not be blank.": "Username cannot be blank",
      "A user with that username already exists.": "Username already taken"
    },
    password1: {
      "This password is too short. It must contain at least 8 characters.":
        "Password must be at least 8 characters",
      "This password is too common.": "Password is too common",
      "This field may not be blank.": "Password cannot be blank"
    },
    password2: {
      "This password is too short. It must contain at least 8 characters.":
        "Password must be at least 8 characters",
      "This password is too common.": "Password is too common",
      "This field may not be blank.": "Password cannot be blank"
    }
  }
};

export default errorMap;
