import http from '../http-common';

class AuthDataService {


    login(data) {
        console.log("LOGIN")
        return http.post("/auth", data)
    }

    signIn(data) {
        console.log("SIGNIN")
        return http.post("/signup", data)
    }
    

}

export default new AuthDataService();