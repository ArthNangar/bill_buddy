import axios from 'axios';

const API_URL ="http://localhost:8080";

export const saveInvoice = async(payload) =>{

    try{
      return await axios.post(`${API_URL}/invoice`,payload);
    }
    catch(error){
        console.log('Error: ', error.message);
        return error.response.data ;
    }
}


export const getAllInvoices = async ( ) => {

    try{
            return await axios.get(`${API_URL}/invoice`)
    }
    catch(error){
        console.log('Error: ', error.message);
    }
}


export const deleteInvoice = async(id) =>{

    try{
      return await axios.delete(`${API_URL}/invoice/${id}`);
    }
    catch(error){
        console.log('Error: ', error.message);
        return error.response.data ;
    }
}

    export const updateInvoice = async (id, payload) => {
        try {
            return await axios.put(`${API_URL}/invoice/${id}`, payload);
        } catch (error) {
            console.log('Error: ', error.message);
            return error.response.data;
        }
    }

    