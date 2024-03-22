import React, { useState } from 'react';
import { TableCell, Table, TableHead, TableRow, TableBody, Button, Typography, styled, TextField } from '@mui/material';

const StyledTable = styled(Table)({
    margin: 20,
    marginTop: 40,
    width: '80%',
    '& > thead > tr > th': {
        background: '#000',
        color: '#FFFFFF',
        fontSize: 18
    },
    '& > tbody > tr > td': {
        fontSize: 16
    },
    '& > tbody > p': {
        fontSize: 18,
        marginTop: 15
    }
});

const Invoices = ({ invoices, removeInvoice, handleUpdate }) => {
    const [editableInvoiceId, setEditableInvoiceId] = useState(null);
    const [updatedFields, setUpdatedFields] = useState({ vendor: '', product: '', amount: '', date: '', email: '' });
    const [searchVendor, setSearchVendor] = useState('');
    const [searchProduct, setSearchProduct] = useState('');

    const handleInputChange = (field, value) => {
        setUpdatedFields({ ...updatedFields, [field]: value });
    };

    const handleUpdateClick = (id, vendor, product, amount, date, email) => {
        setEditableInvoiceId(id);
        setUpdatedFields({ vendor, product, amount, date, email });
    };

    const handleCancelClick = () => {
        setEditableInvoiceId(null);
    };

    const filteredInvoices = invoices.filter(invoice =>
        invoice.vendor.toLowerCase().includes(searchVendor.toLowerCase()) &&
        invoice.product.toLowerCase().includes(searchProduct.toLowerCase())
    );

    return (
        <div style={{ marginTop: 20 }}> {/* Adding top margin */}
            {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                <TextField
                    label="Search by Vendor"
                    variant="outlined"
                    value={searchVendor}
                    onChange={(e) => setSearchVendor(e.target.value)}
                    style={{ flex: 1, marginRight: 10 }}
                />
                <TextField
                    label="Search by Product"
                    variant="outlined"
                    value={searchProduct}
                    onChange={(e) => setSearchProduct(e.target.value)}
                    style={{ flex: 1, marginLeft: 10 }}
                />
            </div> */}
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Vendor</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Action</TableCell>
                        <TableCell>Update</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        filteredInvoices && Array.isArray(filteredInvoices) && filteredInvoices.length > 0 ?
                            filteredInvoices.map(invoice => (
                                <TableRow key={invoice.id}>
                                    <TableCell>{editableInvoiceId === invoice.id ?
                                        <TextField value={updatedFields.vendor} onChange={(e) => handleInputChange('vendor', e.target.value)} /> :
                                        invoice.vendor
                                    }</TableCell>
                                    <TableCell>{editableInvoiceId === invoice.id ?
                                        <TextField value={updatedFields.product} onChange={(e) => handleInputChange('product', e.target.value)} /> :
                                        invoice.product
                                    }</TableCell>
                                    <TableCell>{editableInvoiceId === invoice.id ?
                                        <TextField value={updatedFields.amount} onChange={(e) => handleInputChange('amount', e.target.value)} /> :
                                        `Rs ${invoice.amount}`
                                    }</TableCell>
                                    <TableCell>{editableInvoiceId === invoice.id ?
                                        <TextField type="date" value={updatedFields.date} onChange={(e) => handleInputChange('date', e.target.value)} /> :
                                        invoice.date
                                    }</TableCell>
                                    <TableCell>{editableInvoiceId === invoice.id ?
                                        <TextField value={updatedFields.email} onChange={(e) => handleInputChange('email', e.target.value)} /> :
                                        invoice.email
                                    }</TableCell>
                                    <TableCell>{invoice.action}</TableCell>
                                    <TableCell><Button variant="contained" color="success" onClick={() => removeInvoice(invoice.id)}>Mark Done</Button></TableCell>
                                    <TableCell>
                                        {editableInvoiceId === invoice.id ?
                                            <>
                                                <Button variant="contained" color="primary" onClick={() => handleUpdate(invoice.id, updatedFields)}>Save</Button>
                                                <Button variant="contained" onClick={handleCancelClick}>Cancel</Button>
                                            </>
                                            :
                                            <Button variant="contained" color="primary" onClick={() => handleUpdateClick(invoice.id, invoice.vendor, invoice.product, invoice.amount, invoice.date, invoice.email)}>Update</Button>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))
                            :
                            <Typography>No pending Bills are there </Typography>
                    }
                </TableBody>
            </StyledTable>
        </div>
    );
};

export default Invoices;
