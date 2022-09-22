import axios from "@/axios";

const login = (params) => axios.post(
    '/passport/login',
    params
)

export default {
    login,
}