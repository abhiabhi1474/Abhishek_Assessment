package com.example.demo.Entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.Data;

@Entity(name = "newuser")
@Data
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;

    @Column(unique = true)

    private String email;


    private int age;

}
