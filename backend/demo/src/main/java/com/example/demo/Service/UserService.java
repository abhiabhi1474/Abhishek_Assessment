package com.example.demo.Service;

import com.example.demo.Entity.UserEntity;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public List<UserEntity> getAll() {
        return repo.findAll();
    }

    public UserEntity save(UserEntity entity) {
        return repo.save(entity);
    }

    public boolean existsByEmail(String email){
        return repo.existsByEmail(email);
    }
}
