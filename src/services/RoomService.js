import axios from 'axios';
import * as util from "../utils/env";

export const chat = async (body, token) => {
    await axios.post(util.serverUrl+"/api/chat", body, {
        headers: {
            Authorization: token
        }}
    );
};