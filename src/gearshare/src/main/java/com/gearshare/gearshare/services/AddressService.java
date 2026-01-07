package com.gearshare.gearshare.services;

import com.gearshare.gearshare.domain.entities.AddressEntity;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface AddressService {
    AddressEntity createOrUpdateAddress(AddressEntity addressEntity, UUID listingUUID);

    List<AddressEntity> findAddressFromListing(UUID listingUUID);
}
