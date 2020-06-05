import http from '../http-common';
import authHeaders from './authHeader';

class UtenteDataService {

    getAll() {
        console.log("GET ALL UTENTI");
        return http.get("/utente/all", { headers: authHeaders() });
    }

    delete(id) {
        console.log("DELETE UTENTE");
        return http.delete(`/utente/elimina/${id}`);
    }

    findOne(id) {
        console.log("FIND ONE UTENTE");
        return http.get(`/utente/${id}`);
    }

    update(id, data) {
        console.log(id)
        console.log(data)
        return http.put(`/utente/update/${id}`,data);
    }

    create(data) {
        console.log(data)
        return http.post(`/utente/inserisci`,data);
    }
}

export default new UtenteDataService();