/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.myportfolio.ajax9309.Security.Dto;

import java.util.HashSet;
import java.util.Set;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class NuevoUsuario {
    private String nombre;
    private String nombreUsuario;
    private String password;
    private String email;
    private Set<String> roles=new HashSet<>();
}
