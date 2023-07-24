import axios from "axios"

export const doLogin = async (id, password) => {
    // dont hard code base url
    return axios.post("http://localhost:5000/", {
        phoneNumber: id,
        password
    })
}