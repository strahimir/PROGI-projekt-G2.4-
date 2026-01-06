package com.gearshare.gearshare.services.impl;

import com.gearshare.gearshare.repositories.AddressRepository;
import com.gearshare.gearshare.services.AddressService;
import org.springframework.stereotype.Service;

@Service
public class AddressServiceImpl implements AddressService {

    private final AddressRepository addressRepository;

    public AddressServiceImpl(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }
}
