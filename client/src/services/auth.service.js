import http from "../http-common";

class AuthService{
    login(email, password){
        return http.post("/auth/signin",{email,password})
        .then(res=>{
            if(res.data.accessToken){
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        });
    }

    logout(){
        localStorage.removeItem("user");
    }

    register(username, email, password, firstName, lastName){
        return http.post("/auth/signup",{
            username, email, password, firstName, lastName
        })
    }
}

export default new AuthService();