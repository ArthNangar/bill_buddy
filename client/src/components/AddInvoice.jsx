import styled from "@emotion/styled";
import {  TextField,Box } from "@mui/material";
import React , {useState} from "react";
import { saveInvoice } from "../services/api";

const Component = styled(Box)(
    {
        '&>h3':{
            fontSize: 30
        },
        '&>div>div':{
            marginRight: 15,
            minWidth: 180
        }
    }
)

const defaultObj = {
    vendor:'',
    product:'',
    amount: 0,
    date:'',
    action:'pending'
}
const AddInvoice =() => {
    const[invoice , setInvoice] = useState( defaultObj);
    const onValuechange = (e) => {
        setInvoice({...invoice, [e.target.name]: e.target.value});
        
    }

    const addNewInvoice =async () =>{
       await  saveInvoice({...invoice, amount: Number(invoice['amount'])});
    }

    return(
        <Component>
            <h3 style={{ textAlign: 'left', marginLeft: 20 }}>Pending Bills List:</h3>
            <Box>
            <TextField 
                placeholder="Enter the name of Buyer"
                onChange={ (e) => onValuechange(e)}
                name="vendor"
            />
            <TextField 
                placeholder="Enter the product Name"
                onChange={ (e) => onValuechange(e)}
                name="product"
            />
            <TextField 
                placeholder="Enter the Amount remaing"
                type="number"
                onChange={ (e) => onValuechange(e)}
                name="amount"
            />
            <TextField 
                placeholder="Enter the purchase Date "
                type="date"
                onChange={ (e) => onValuechange(e)}
                name="date"
            />
            <button style={{
             backgroundColor: '#e74c3c', // Adjust color as needed
             color: '#fff',
             padding: '17px 30px',
             borderRadius: '8px',
             border: 'solid',
             cursor: 'pointer',
             fontSize: '16px',
             fontWeight: 'bold',
             }
            }
                onClick={() => addNewInvoice()}
            >
            Add Bill
            </button>

            </Box>

        </Component>
    )
}

export default AddInvoice;