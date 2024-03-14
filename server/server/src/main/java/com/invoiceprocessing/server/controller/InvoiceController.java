package com.invoiceprocessing.server.controller;

import com.invoiceprocessing.server.model.Invoice;
import com.invoiceprocessing.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class InvoiceController {
    @Autowired
    InvoiceService invoiceService;
    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice){
        return this.invoiceService.addInvoice(invoice);
    }

    @GetMapping("/invoice")
    public List<Invoice> getInvoices() {
        return this.invoiceService.getInvoices();
    }

    @PutMapping("/invoice/{invoiceId}")
    public Invoice updateInvoice(@PathVariable Long invoiceId, @RequestBody Invoice updatedInvoice) {
        return invoiceService.updateInvoice(invoiceId, updatedInvoice);
    }

    @DeleteMapping("/invoice/{inoviceId}")
    public Invoice deleteInvoice(@PathVariable String inoviceId){
        return this.invoiceService.deleteInvoice(Long.parseLong((inoviceId)));
    }
}
