import cookies from "js-cookie";

//添加cookie
const setCookie = (userInfo) => {
    const arr = Object.entries(userInfo);
    for (let i = 0; i < arr.length; i++ ) {
        cookies.set(arr[i][0],arr[i][1]);
    }
    return arr;
}

//获取cookie
const getCookie = () => {
    return {
        appkey: cookies.get('appkey'),
        username: cookies.get('username'),
        email: cookies.get('email'),
        role: cookies.get('role')
    }
}
//删除cookie
const removeCookie = () => {
    cookies.remove('appkey');
    cookies.remove('username');
    cookies.remove('email');
    cookies.remove('role');
}
export default {
    setCookie,
    getCookie,
    removeCookie
}