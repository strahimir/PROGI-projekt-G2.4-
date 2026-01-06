package com.gearshare.gearshare.mappers.impl;

import com.gearshare.gearshare.domain.dto.AddressDto;
import com.gearshare.gearshare.domain.entities.AddressEntity;
import com.gearshare.gearshare.mappers.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class AddressMapperImpl implements Mapper<AddressEntity, AddressDto> {

    public AddressMapperImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    private ModelMapper modelMapper;

    @Override
    public AddressDto mapTo(AddressEntity addressEntity) {
        return modelMapper.map(addressEntity, AddressDto.class);
    }

    @Override
    public AddressEntity mapFrom(AddressDto addressDto) {
        return modelMapper.map(addressDto, AddressEntity.class);
    }
}
