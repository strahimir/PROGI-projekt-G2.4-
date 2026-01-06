package com.gearshare.gearshare.controllers;


import com.gearshare.gearshare.domain.dto.AddressDto;
import com.gearshare.gearshare.domain.entities.AddressEntity;
import com.gearshare.gearshare.mappers.Mapper;
import com.gearshare.gearshare.services.AddressService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/listings/addresses")
public class AddressController {

    private final AddressService addressService;

    private final Mapper<AddressEntity, AddressDto> addressMapper;

    public AddressController(AddressService addressService, Mapper<AddressEntity, AddressDto> addressMapper) {
        this.addressService = addressService;
        this.addressMapper = addressMapper;
    }

}
