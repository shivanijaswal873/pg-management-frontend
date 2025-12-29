import axios from "axios";

export interface LoginPayload {
  email: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}
export function loginApi(data: LoginPayload) {
  return axios.post<LoginResponse>("http://localhost:5000/api/admin/auth/login", data);
}
