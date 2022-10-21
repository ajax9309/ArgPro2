
package com.myportfolio.ajax9309.Security.Repository;

import com.myportfolio.ajax9309.Security.Entity.Rol;
import com.myportfolio.ajax9309.Security.Enum.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);        
}
