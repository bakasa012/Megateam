import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json",
    }
});
export default http;

// export default axios.create({
//     baseURL: "http://localhost:8080/api",
//     headers: {
//         "Content-type": "application/json",
//     }
// });