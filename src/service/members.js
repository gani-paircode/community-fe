// import axios from "axios";

export const fetchUsers = () => {
    // base url should not be hardcoded
    // return axios.get("http://localhost:5000/users");
    return ("http://localhost:5000/users").then(res => res.json());
}

export const createUser = (data) => {
    // base url should not be hardcoded
    // make post request here
}