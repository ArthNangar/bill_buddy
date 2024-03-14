package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.model.User;
import java.util.List;

public interface UserService {
    List<User> get();

    User get(String email);
    void save(User user);

    void delete(int id);
}
