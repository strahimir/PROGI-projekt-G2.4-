package com.gearshare.gearshare.controllers;


import ch.qos.logback.classic.LoggerContext;
import com.gearshare.gearshare.domain.dto.AddressDto;
import com.gearshare.gearshare.domain.dto.ListingDto;
import com.gearshare.gearshare.domain.entities.AddressEntity;
import com.gearshare.gearshare.mappers.Mapper;
import com.gearshare.gearshare.services.AddressService;
import com.gearshare.gearshare.services.ListingService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/listings")
public class AddressController {

    private final AddressService addressService;

    private final ListingService listingService;

    private final Mapper<AddressEntity, AddressDto> addressMapper;

    public AddressController(AddressService addressService, ListingService listingService, Mapper<AddressEntity, AddressDto> addressMapper) {
        this.addressService = addressService;
        this.listingService = listingService;
        this.addressMapper = addressMapper;
    }

    @PostMapping( path = "/{listingUUID}")
    public ResponseEntity<AddressDto> createAddress(@RequestBody AddressDto address,
                                                    @PathVariable("listingUUID") UUID listingUUID) {
        AddressEntity addressEntity = addressMapper.mapFrom(address);
        AddressEntity savedAddressEntity = addressService.createOrUpdateAddress(addressEntity, listingUUID);
        return new ResponseEntity<>(addressMapper.mapTo(savedAddressEntity), HttpStatus.CREATED);
    }

    @GetMapping( path = "/{listingUUID}/address")
    public ResponseEntity<AddressDto> getAddressByListingUUID( @PathVariable("listingUUID") UUID listingUUID ){
        List<AddressEntity> addressEntity = addressService.findAddressFromListing(listingUUID);
        if(addressEntity.isEmpty())
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(addressMapper.mapTo(addressEntity.get(0)), HttpStatus.OK);
    }

    @PutMapping( path = "/{listingUUID}/address")
    public ResponseEntity<AddressDto> fullUpdateAddress(
            @PathVariable("listingUUID") UUID listingUUID,
            @RequestBody AddressDto address
    ){

        if( !listingService.exists(listingUUID))
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        AddressEntity addressEntity = addressMapper.mapFrom(address);
        AddressEntity savedAddressEntity = addressService.createOrUpdateAddress(addressEntity, listingUUID);

        return new ResponseEntity<>(addressMapper.mapTo(savedAddressEntity), HttpStatus.OK);
    }

}
