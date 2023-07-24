// import axios from "axios";

const axios = window.axios;
export const doLogin = async (id, password) => {
    // dont hard code base url
    return axios.post("http://localhost:5000/login/v1", {
        phoneNumber: id,
        password
    })
}