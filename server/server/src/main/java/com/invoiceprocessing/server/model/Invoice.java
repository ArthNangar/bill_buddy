package com.invoiceprocessing.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Invoice {
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String vendor;
    private String product;
    private int amount;
    private String date;
    private String action;

    public  Invoice(){

    }

    public Invoice(long id, String vendor, String product, int amount, String date, String action) {
        this.id = id;
        this.vendor = vendor;
        this.product = product;
        this.amount = amount;
        this.date = date;
        this.action = action;
    }

    public long getId() {
        return id;
    }

    public String getVendor() {
        return vendor;
    }

    public String getProduct() {
        return product;
    }

    public int getAmount() {
        return amount;
    }

    public String getDate() {
        return date;
    }

    public String getAction() {
        return action;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setAction(String action) {
        this.action = action;
    }
}
