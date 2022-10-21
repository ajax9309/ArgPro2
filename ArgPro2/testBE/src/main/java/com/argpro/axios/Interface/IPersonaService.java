/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.argpro.axios.Interface;

import com.argpro.axios.Entity.Persona;
import java.util.List;

/**
 *
 * @author aleoh
 */
public interface IPersonaService {
    //get personas
    public List<Persona> getPersona();
    
    //post persona
    public void savePersona(Persona persona);
    
    //delete personas
    public void deletePersona(Long id);
    
    //find personas
    public Persona findPersona(Long id);
   
}
