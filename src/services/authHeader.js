function authHeaders() {
   const utente = JSON.parse(localStorage.getItem("utente"));

   if(utente && utente.token ) {

       return { Authorization: 'Bearer ' + utente.token};

   } else {
       return {};
   }
}

export default authHeaders;