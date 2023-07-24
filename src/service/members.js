// import axios from "axios";

const axios = window.axios;
export const fetchUsers = () => {
    // base url should not be hardcoded
    return axios.get("http://localhost:5000/users");
}

export const createUser = (data) => {
    // base url should not be hardcoded
    // make post request here
}