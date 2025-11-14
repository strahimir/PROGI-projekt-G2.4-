package com.gearshare.gearshare.repositories;

import com.gearshare.gearshare.domain.entities.ClientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ClientRepository extends JpaRepository<ClientEntity, UUID> {

    Optional<ClientEntity> findByUsername(String username);

    Optional<ClientEntity> findByEmail(String email);

    Optional<ClientEntity> findByProviderAndProviderId(String provider, String providerId);
}
