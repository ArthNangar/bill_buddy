import Header from "./Header";
import './button.css';
import Invoices from './Invoices'
import AddInvoice from "./AddInvoice";
import React, {useState, useEffect} from "react";
import { getAllInvoices , deleteInvoice, updateInvoice } from "../services/api";


const Home = () =>{

    const [addInvoice, setAddInvoice] = useState(false);
    const [invoices , setInvoices ] = useState([]);

    useEffect(() => {
        const getData = async() => {
            const response = await getAllInvoices();
             setInvoices(response.data);
        }
        getData(); 
    },[addInvoice])


    const toggleInvoice =() =>{
        setAddInvoice(true);
    }

    const removeInvoice =  async (id) =>{
        await deleteInvoice(id);

        const updatedInvoce = invoices.filter(invoice => invoice.id !== id);
        setInvoices(updatedInvoce);
    }

    const handleUpdate = async (id, updatedData) => {
        try {
            await updateInvoice(id, updatedData); 
            const updatedInvoices = invoices.map(invoice => {
                if (invoice.id === id) {
                    return { ...invoice, ...updatedData };
                }
                return invoice;
            });
            window.location.href = "/home"
            setInvoices(updatedInvoices);
        } catch (error) {
            console.error('Error updating invoice:', error);
        }
    }

    return(
       <>
       <Header />
       <div style={{ textAlign:'center'}}>
       <h1 style={{color:"black"}}> Pending Invoice</h1>
       { !addInvoice && <button className="gradient-button"
       onClick={() => toggleInvoice() }
       >Add Invoice</button>
       }
       { addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
        </div>
        <div>
        <Invoices invoices={invoices}
            removeInvoice={removeInvoice}
            handleUpdate={handleUpdate}
         />
        </div>
       </>
    )
}

export default Home;
