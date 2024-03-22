package com.invoiceprocessing.server.controller;

import com.invoiceprocessing.server.model.Invoice;
import com.invoiceprocessing.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

//    @GetMapping("/Invoice/{email}")
//    public ResponseEntity<List<Invoice>> getInvoicesByEmail(@PathVariable("email") String email) {
//        List<Invoice> reservations = invoiceService.getInvoicesByEmail(email);
//
//        if (reservations.isEmpty()) {
//            throw new RuntimeException("No reservations found for email: " + email);
//        }
//
//        return ResponseEntity.ok(reservations);
//    }

    @DeleteMapping("/invoice/{inoviceId}")
    public Invoice deleteInvoice(@PathVariable String inoviceId){
        return this.invoiceService.deleteInvoice(Long.parseLong((inoviceId)));
    }
}
