import { jwtDecode } from "jwt-decode";

export const serverUrl = "http://localhost:8080";

export const decodeJwt = (token) => {
    return jwtDecode(token).us;
};
