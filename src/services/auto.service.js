import http from '../http-common';

class AutoDataService {

    getAll() {
        console.log("GET ALL AUTO");
        return http.get("/auto/all");
    }

    delete(id) {
        console.log("DELETE AUTO");
        return http.delete(`/auto/elimina/${id}`);
    }

    findOne(id) {
        console.log("FIND ONE AUTO");
        return http.get(`/auto/${id}`);
    }

    update(id, data) {
        console.log(id)
        console.log(data)
        return http.put(`/auto/update/${id}`,data);
    }

    create(data) {
        console.log(data)
        return http.post(`/auto/inserisci`,data);
    }
    

}

export default new AutoDataService();