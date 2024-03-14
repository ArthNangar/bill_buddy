import { useState } from "react";
import { TextField, Box, styled } from "@mui/material";
import { saveInvoice } from "../services/api";

const Component = styled(Box)({
    marginTop: 20,
    '& > p': {
        fontSize: 26,
        marginBottom: 10
    },
    '& > div > div': {
        marginRight: 20,
        minWidth: 200
    }
})

const defaultObj = {
    vendor: '',
    product: '',
    amount: 0,
    date: '',
    email:'',
    action: 'pending'
}

const AddInvoice = ({ setAddInvoice }) => {
    const [invoice, setInvoice] = useState(defaultObj);

    const onValueChange = (e) => {
        setInvoice({ ...invoice, [e.target.name]: e.target.value })
    }

    const addNewInvoice = async () => {
        await saveInvoice({ ...invoice, amount: Number(invoice['amount']) });

        setAddInvoice(false);
    }

    return (
        <Component>
            <h1 style={{ textAlign: 'center', marginLeft: 20 }}>Add Invoice</h1>
            <Box>
                <TextField 
                    name="vendor"
                    
                    placeholder="Enter vendor name"
                    onChange={(e) => onValueChange(e)}
                    autoComplete="off"
                />
                <TextField 
                    name="product"
                    
                    placeholder="Enter product name"
                    onChange={(e) => onValueChange(e)}
                    autoComplete="off"
                />
                <TextField 
                    name="amount"
                    
                    placeholder="Enter amount (in Rs)"
                    onChange={(e) => onValueChange(e)}
                    type="number"
                    autoComplete="off"
                />
                <TextField 
                    name="date"
                    
                    placeholder="Enter date"
                    onChange={(e) => onValueChange(e)}
                    type="date"
                    autoComplete="off"
                />
                 <TextField 
                    name="email"
                    
                    placeholder="Enter your email"
                    onChange={(e) => onValueChange(e)}
                    
                    autoComplete="off"
                />
                <button style={{
             backgroundColor: '#e74c3c',
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