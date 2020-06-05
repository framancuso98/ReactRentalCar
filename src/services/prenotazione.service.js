import http from '../http-common';

class PrenotazioneDataService {

    getAll() {
        console.log("GET ALL PRENOTAZIONI");
        return http.get("/prenotazione/all");
    }

    delete(id) {
        console.log("DELETE PRENPOTAZIONE");
        return http.delete(`/prenotazione/elimina/${id}`);
    }

    findOne(id) {
        console.log("FIND ONE PRENOTAZIONE");
        return http.get(`/prenotazione/${id}`);
    }

    accetta(id) {
        console.log(id)
        return http.put(`/prenotazione/accetta/${id}`);
    }

    rifiuta(id) {
        console.log(id)
        return http.put(`/prenotazione/rifiuta/${id}`);
    }
}

export default new PrenotazioneDataService();