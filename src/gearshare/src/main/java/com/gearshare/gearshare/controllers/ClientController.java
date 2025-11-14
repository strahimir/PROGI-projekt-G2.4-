package com.gearshare.gearshare.controllers;

import com.gearshare.gearshare.domain.entities.ClientEntity;
import com.gearshare.gearshare.domain.dto.ClientDto;
import com.gearshare.gearshare.mappers.Mapper;
import com.gearshare.gearshare.services.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientService clientService;

    private final Mapper<ClientEntity, ClientDto> clientMapper;

    public ClientController(Mapper<ClientEntity, ClientDto> clientMapper, ClientService clientService) {
        this.clientMapper = clientMapper;
        this.clientService = clientService;
    }


    @PostMapping
    public ResponseEntity<ClientDto> createClient(@RequestBody ClientDto client) {
        ClientEntity clientEntity = clientMapper.mapFrom(client);
        ClientEntity savedClientEntity = clientService.createOrUpdateClient(clientEntity);
        return new ResponseEntity<>(clientMapper.mapTo(savedClientEntity), HttpStatus.CREATED);
    }

    @GetMapping
    public List<ClientDto> getAllClients() {
        List<ClientEntity> clients = clientService.findAllClients();
        return clients.stream()
                .map(clientMapper::mapTo)
                .collect(Collectors.toList());

    }

    @GetMapping(path = "/{clientUUID}")
    public ResponseEntity<ClientDto> getClientByUUID(
            @PathVariable("clientUUID") UUID clientUUID) {
        Optional<ClientEntity> client = clientService.findClientWithUUID(clientUUID);
        return client.map(clientEntity -> {
            ClientDto clientDto = clientMapper.mapTo(clientEntity);
            return new ResponseEntity<>(clientDto, HttpStatus.OK);
        }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping( path = "/profiles/{username}")
    public ResponseEntity<ClientDto> getClientByUsername(@PathVariable("username") String username){
        Optional<ClientEntity> client = clientService.findClientWithUsername(username);
        return client.map(clientEntity -> {
            ClientDto clientDto = clientMapper.mapTo(clientEntity);
            return new ResponseEntity<>(clientDto, HttpStatus.OK);
        }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping(path = "/{clientUUID}")
    public ResponseEntity<ClientDto> fullUpdateClient(@RequestBody ClientDto client,
                                                      @PathVariable("clientUUID") UUID clientUUID) {
        if(!clientService.exists(clientUUID))
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        client.setClientUUID(clientUUID);
        ClientEntity clientEntity = clientMapper.mapFrom(client);
        ClientEntity updatedClientEntity = clientService.createOrUpdateClient(clientEntity);
        return new ResponseEntity<>(clientMapper.mapTo(updatedClientEntity), HttpStatus.OK);

    }

    @PatchMapping( path = "/{clientUUID}" )
    public ResponseEntity<ClientDto> partialUpdateClient(@RequestBody ClientDto clientDto,
                                                         @PathVariable("clientUUID") UUID clientUUID){

        if(!clientService.exists(clientUUID))
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        clientDto.setClientUUID(clientUUID);
        ClientEntity clientEntity = clientMapper.mapFrom(clientDto);
        ClientEntity updatedClientEntity = clientService.partiallyUpdateClientWithUUID(clientUUID, clientEntity);

        return new ResponseEntity<>(clientMapper.mapTo(updatedClientEntity), HttpStatus.OK);
    }

    @DeleteMapping( path = "/{clientUUID}")
    public ResponseEntity<Void> deleteClient(
            @PathVariable("clientUUID") UUID clientUUID){

        if(!clientService.exists(clientUUID))
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        clientService.deleteClientWithUUID(clientUUID);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
