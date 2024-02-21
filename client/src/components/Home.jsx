import Header from "./Header";
import './button.css';
import AddInvoice from "./AddInvoice";
import React, {useState} from "react";


const Home = () =>{

    const [addInvoice, setAddInvoice] = useState(false);

    const toggleInvoice =() =>{
        setAddInvoice(true);
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
       </>
    )
}

export default Home;
