package com.example.demo.Controller;


import com.example.demo.Entity.UserEntity;
import com.example.demo.Service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/users")
@CrossOrigin("http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserEntity> getUser() {
        return userService.getAll();
    }

    @PostMapping
    public UserEntity createUser(@RequestBody UserEntity userEntity) {
        return userService.save(userEntity);
    }
    @GetMapping("/email/{email}")
    public boolean checkEmail(@PathVariable String email){
        return userService.existsByEmail(email);
    }

}
