import { TableCell, Table, TableHead, TableRow, TableBody, Button, styled } from '@mui/material';

const Invoice = ({invoices}) =>{


    return(
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Vendor</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell> {Invoice.vendor}</TableCell>
                    <TableCell> {Invoice.product}</TableCell>
                    <TableCell> {Invoice.amount}</TableCell>
                    <TableCell> {Invoice.date}</TableCell>
                    <TableCell> {Invoice.status}</TableCell>
                    <TableCell><Button variant="contained" color="success">Mark Done</Button></TableCell>
                            
                    
                </TableBody>




                {/* <TableBody>
                    {
                        invoices.map(invoice => (
                            <TableRow>
                                <TableCell>{invoice.vendor}</TableCell>
                                <TableCell>{invoice.product}</TableCell>
                                <TableCell>Rs {invoice.amount}</TableCell>
                                <TableCell>{invoice.date}</TableCell>
                                <TableCell>{invoice.status}</TableCell> */}
                                {/* <TableCell>{invoice.action}</TableCell> */}
                                {/* <TableCell><Button variant="contained" color="success" onClick={() => removeInvoice(invoice.id)}>Mark Done</Button></TableCell> */}
                                {/* <TableCell> 
                                    <Button variant="contained" color="success"> Mark Done</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody> */}
            </Table>
        </>
    )
}

export default Invoice;