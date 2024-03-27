export interface UserLoginResponse {
  token: string;
}

export interface UserRegistrationResponse {
  token: string;
}

export interface UserFetchError {
  error: {
    message: string;
  };
}

interface UserRole {
  id: number;
  userId: number;
  roleId: number;
  createdAt: string;
  updatedAt: string;
}

interface Roles {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  UserRole?: UserRole;
}

export interface User {
  email: string;
  id: number;
  roles: Roles[];
  iat: number;
  exp: number;
}
