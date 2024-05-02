import axios from 'axios';
import * as util from "../utils/env";

export const register = async (body) => {
    let temp = await axios.post(util.serverUrl+"/api/user/register", body)
        .catch((err) => {
            return err;
        });
    if (temp.response) 
        return temp.response;
    return temp;
};
export const login = async (body) => {
    let temp = await axios.post(util.serverUrl+"/api/user/login", (body))
        .catch((err) => {
            return err;
        });
    if (temp.response) 
        return temp.response;
    return temp;
};
export const validate = async (token) => {
    let temp = await axios.get(util.serverUrl + "/api/user/validate", {
        headers: {
            Authorization: token
        }}
    );
    return temp;
}