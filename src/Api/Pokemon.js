import {API_HOST} from '../Utils/Constants';

export async function getPokemonsApi(endpointUrl) {
    try{
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;
        const response = await fetch(endpointUrl || url);
        const result = await response.json();
        return result;

    }
    catch(error){
        throw error;
    }
}

//Esta funcion se usa para tener los detalles de cada pokemon
//atraves de una peticion con fecth
export async function getPokemonsDeatilsByUrlApi(url){

    try{
        const response = await fetch(url);
        const result = await response.json();

        return result;
    }
    catch(error){
        throw error;
    }
}

export async function getPokemonDetailsAPI(id){
    try{
        const url = `${API_HOST}/pokemon/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        
        return result;
    }
    catch(error){
        throw error;
    }
}