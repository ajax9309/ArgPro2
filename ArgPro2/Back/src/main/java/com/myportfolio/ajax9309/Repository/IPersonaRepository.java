
package com.myportfolio.ajax9309.Repository;

import com.myportfolio.ajax9309.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
    
}
