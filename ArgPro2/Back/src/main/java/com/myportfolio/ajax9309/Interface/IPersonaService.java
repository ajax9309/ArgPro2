
package com.myportfolio.ajax9309.Interface;

import com.myportfolio.ajax9309.Entity.Persona;
import java.util.List;


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
