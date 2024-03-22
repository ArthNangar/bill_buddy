package com.invoiceprocessing.server.services;
import com.invoiceprocessing.server.model.Invoice;

import java.util.List;

public interface InvoiceService {
    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoices();

//    public List<Invoice> getInvoicesByEmail();

    public Invoice updateInvoice(long id, Invoice updatedInvoice);
    public Invoice deleteInvoice(long id);


}
