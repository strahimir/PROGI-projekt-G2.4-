package com.gearshare.gearshare.domain.dto;

import com.gearshare.gearshare.domain.entities.ListingEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.locationtech.jts.geom.Point;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddressDto {

    private UUID addressUUID;

    private ListingEntity listing;

    private Point coordinates;

    private String streetName;

    private String streetNumber;

    private String aptNumber;

    private String listingPostalCode;

    private String listingCountryCode;
}
