package com.gearshare.gearshare.controllers;

import com.gearshare.gearshare.domain.dto.ClientDto;
import com.gearshare.gearshare.domain.entities.ClientEntity;
import com.gearshare.gearshare.mappers.Mapper;
import com.gearshare.gearshare.security.ClientPrincipal;
import com.gearshare.gearshare.services.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.Optional;
import java.util.StringJoiner;
import java.util.UUID;

@RestController
public class AuthController {

    private final ClientService clientService;

    private final Mapper<ClientEntity, ClientDto> clientMapper;


    public AuthController(ClientService clientService, Mapper<ClientEntity, ClientDto> clientMapper) {
        this.clientService = clientService;
        this.clientMapper = clientMapper;
    }

    @GetMapping(path = "/api/me")
    public ResponseEntity<?> me(Authentication authentication) {

        if(authentication != null && authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof ClientPrincipal clientPrincipal) {

                Optional<ClientEntity> client = clientService.findClientWithUUID(clientPrincipal.getClientUUID());

                return client.map(clientEntity -> {
                    ClientDto clientDto = clientMapper.mapTo(clientEntity);
                    return new ResponseEntity<>(clientDto, HttpStatus.OK);
                }).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
            }
        }

        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }


    @GetMapping("/api/debug")
    public Map<String, Object> debugOAuth(@AuthenticationPrincipal OAuth2User principal) {
        if (principal == null) {
            return Map.of("message", "No authenticated user");
        }
        return Map.of(
                "attributes", principal.getAttributes(),
                "authorities", principal.getAuthorities()
        );

    }

}
