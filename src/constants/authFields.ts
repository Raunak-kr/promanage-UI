// authFields.ts

export const LOGIN_FIELDS = {
  email: 'email',
  password: 'password',
} as const;

export const REGISTER_FIELDS = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
} as const;
export const FORGOT_PASSWORD_FIELDS = {
  email: 'email',
};