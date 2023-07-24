// import axios from "axios";

export const doLogin = async (id, password) => {
    // dont hard code base url
    // return axios.post("http://localhost:5000/", {
    //     phoneNumber: id,
    //     password
    // })

    return fetch("http://localhost:5000/login", { 
        method: "POST",
        body: JSON.stringify({ phoneNumber: id, password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(res => res.json());
}