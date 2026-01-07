package com.gearshare.gearshare.repositories;

import com.gearshare.gearshare.domain.entities.AddressEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface AddressRepository extends JpaRepository<AddressEntity, UUID> {

    List<AddressEntity> findByListing_ListingUUID(UUID listingUUID);
}
