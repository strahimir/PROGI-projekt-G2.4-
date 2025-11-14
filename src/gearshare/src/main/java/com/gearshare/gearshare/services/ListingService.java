package com.gearshare.gearshare.services;

import com.gearshare.gearshare.domain.entities.ListingEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ListingService {

    ListingEntity createOrUpdateListing(ListingEntity listing, UUID sellerUUID);

    List<ListingEntity> findAllListings();

    Page<ListingEntity> findAllListingsPageable(Pageable pageable, Specification<ListingEntity> specification);

    Optional<ListingEntity> findListingWithUUID(UUID listingUUID);

    boolean exists(UUID listingUUID);

    void deleteListingWithUUID(UUID listingUUID);

    ListingEntity updateListingWithUUID(UUID listingUUID, ListingEntity listingEntity);

    List<ListingEntity> findAllListingsFromSeller(UUID sellerUUID);
}
