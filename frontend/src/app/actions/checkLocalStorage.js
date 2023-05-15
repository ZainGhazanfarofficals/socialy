import { LOGIN_SUCCESS,LOGOUT } from "./authActions";

export const checkLocalStorage = () => {
    // console.log("Check local storage called");
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    if(token && user){
        return {type:LOGIN_SUCCESS,payload:{token,user},isAuthenticated:true};
    } else {
        return {type:LOGOUT,isAuthenticated:false};
    } 
}