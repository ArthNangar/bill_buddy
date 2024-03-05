import Header from "./Header";
import './button.css';
import Invoices from './Invoices'
import AddInvoice from "./AddInvoice";
import React, {useState, useEffect} from "react";
import { getAllInvoices , deleteInvoice } from "../services/api";


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

        const updatedInvoce = invoices.filter(invoice => invoice.id != id);
        setInvoices(updatedInvoce);
    }

    return(
       <>
       <Header />
       <div>
       <h1 style={{color:"black"}}> Pending Invoice</h1>
       {/* <button style={{ background: 'blue', color: 'white', padding: '10px' }}>Add Invoice </button> */}
       { !addInvoice && <button className="gradient-button"
       onClick={() => toggleInvoice() }
       >Add Invoice</button>
       }
       { addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
        </div>
        <div>
        <Invoices invoices={invoices}
            removeInvoice={removeInvoice}
         />
        </div>
       </>
    )
}

export default Home;
