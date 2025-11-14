package com.gearshare.gearshare.security;

import com.gearshare.gearshare.domain.entities.ClientEntity;
import com.gearshare.gearshare.services.ClientService;
import com.gearshare.gearshare.security.ClientPrincipal;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class OAuth2ClientService extends DefaultOAuth2UserService {

    public final ClientService clientService;

    @Override
    @SneakyThrows
    public OAuth2User loadUser(OAuth2UserRequest oAuth2ClientRequest) {

        log.info("Loading user: {}", oAuth2ClientRequest);


        OAuth2User oAuth2Client = super.loadUser(oAuth2ClientRequest);


        log.info("OAuth2 user attributes: {}", oAuth2Client.getAttributes());


        return processOAuth2Client(oAuth2ClientRequest, oAuth2Client);
    }

    private OAuth2User processOAuth2Client(
            OAuth2UserRequest oAuth2ClientRequest,
            OAuth2User oAuth2Client
    ){
        OAuth2ClientDto oAuth2ClientDto =
                OAuth2ClientDto
                        .builder()
                        .providerId(oAuth2Client.getAttributes().get("sub").toString())
                        .email(oAuth2Client.getAttributes().get("email").toString())
                        .firstName((String) oAuth2Client.getAttributes().getOrDefault("given_name", "NoName"))
                        .lastName(oAuth2Client.getAttributes().get("family_name").toString())
                        .build();

        Optional<ClientEntity> existingClientOptional =
                clientService.findClientWithProviderAndProviderId("google", oAuth2ClientDto.getProviderId());


        ClientEntity client =
                existingClientOptional
                        .map( existingClient -> {
                            existingClient.setEmail(oAuth2ClientDto.getEmail());
                            existingClient.setFirstName(oAuth2ClientDto.getFirstName());
                            existingClient.setLastName(oAuth2ClientDto.getLastName());
                            return existingClient;
                        })
                        .orElseGet(() -> ClientEntity.builder()
                                .provider("google")
                                .providerId(oAuth2ClientDto.getProviderId())
                                .email(oAuth2ClientDto.getEmail())
                                .username(oAuth2ClientDto.getEmail().split("@")[0] + "_" + UUID.randomUUID().toString().substring(24))
                                .firstName(oAuth2ClientDto.getFirstName())
                                .lastName(oAuth2ClientDto.getLastName())
                                .build());


        ClientEntity savedClient = clientService.createOrUpdateClient(client);


        return ClientPrincipal.createClientPrincipal(savedClient, oAuth2Client.getAttributes());

    }

}
