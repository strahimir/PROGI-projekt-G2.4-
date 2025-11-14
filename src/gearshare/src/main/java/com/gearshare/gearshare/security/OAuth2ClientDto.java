package com.gearshare.gearshare.security;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OAuth2ClientDto {
    private String provider;
    private String providerId;
    private String email;
    private String firstName;
    private String lastName;
}
