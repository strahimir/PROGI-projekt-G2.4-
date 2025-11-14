package com.gearshare.gearshare.services;

import com.gearshare.gearshare.domain.entities.ClientEntity;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ClientService {

    ClientEntity createOrUpdateClient(ClientEntity client);

    List<ClientEntity> findAllClients();

    Optional<ClientEntity> findClientWithUUID(UUID clientUUID);

    boolean exists(UUID clientUUID);

    void deleteClientWithUUID(UUID clientUUID);

    ClientEntity partiallyUpdateClientWithUUID(UUID clientUUID, ClientEntity clientEntity);

    Optional<ClientEntity> findClientWithUsername(String username);

    Optional<ClientEntity> findClientWithEmail(String email);

    Optional<ClientEntity> findClientWithProviderAndProviderId(String provider, String providerId);

    void flush();
}
