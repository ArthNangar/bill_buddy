package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.dao.InvoiceDao;
import com.invoiceprocessing.server.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InvoiceServiceImpl implements  InvoiceService{

    @Autowired
    InvoiceDao invoiceDao;


    @Override
    public Invoice addInvoice(Invoice invoice) {
        invoiceDao.save(invoice);

        return invoice;
    }



    @Override
    public List<Invoice> getInvoices() {
        return invoiceDao.findAll();
    }

    @Override
    public Invoice updateInvoice(long id, Invoice updatedInvoice) {
        Optional<Invoice> optionalInvoice = invoiceDao.findById(id);
        if (optionalInvoice.isPresent()) {
            Invoice invoice = optionalInvoice.get();

            invoice.setAmount(updatedInvoice.getAmount());
            invoice.setDate(updatedInvoice.getDate());
            invoice.setVendor(updatedInvoice.getVendor());
            invoice.setEmail(updatedInvoice.getEmail());
            invoice.setProduct(updatedInvoice.getProduct());

            invoiceDao.save(invoice);
            return invoice;
        } else {
            throw new RuntimeException("Invoice not found with id: " + id);
        }
    }


    @Override
    public Invoice deleteInvoice(long id) {
        Invoice invoice = invoiceDao.findById(id).get();
        invoiceDao.delete(invoice);
        return  invoice;
    }
}

