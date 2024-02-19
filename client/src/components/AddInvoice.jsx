import styled from "@emotion/styled";
import {  TextField,Box } from "@mui/material";

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

const AddInvoice =() => {
    return(
        <Component>
            <h3 style={{ textAlign: 'left', marginLeft: 20 }}>Pending Bills List:</h3>
            <Box>
            <TextField 
                placeholder="Enter the name of Buyer"
            />
            <TextField 
                placeholder="Enter the product Name"
            />
            <TextField 
                placeholder="Enter the Amount remaing"
                type="number"
            />
            <TextField 
                placeholder="Enter the purchase Date "
                type="date"
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
            }>
            Add Bill
            </button>

            </Box>

        </Component>
    )
}

export default AddInvoice;