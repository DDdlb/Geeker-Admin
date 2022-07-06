import http from "../http";

export const loginApi = (loginData) =>{
    return http.post('/user/login', loginData);
}

export const getMenuList = (isAdmin) =>{
    return http.get('/user/menu', isAdmin)
}