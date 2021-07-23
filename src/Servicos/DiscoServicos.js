import axios from 'axios';


const urlbase = "http://localhost:8080/discografia";
const urldiscos = "http://localhost:8080/discografia/all";

class DiscoServicos{
    getDiscos(){
        return axios.get(urldiscos); 
    }

    getDiscoById(id){
        return axios.get(urlbase+"/disco/"+id);
    }

    createDisco(disco){

        console.log(disco);
        return axios.post(urlbase+"/novoDisco", disco);

    }

    editDisco(disco){
        return axios.put(urlbase+"/update/"+disco.id_Disco, disco);
    }
    deleteDisco(id_Disco){      
        return axios.delete(urlbase+"/delete/"+id_Disco);
    }

}

export default new  DiscoServicos();