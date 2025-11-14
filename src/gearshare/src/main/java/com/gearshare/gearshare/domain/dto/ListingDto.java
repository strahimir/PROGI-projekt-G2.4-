package com.gearshare.gearshare.domain.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.gearshare.gearshare.domain.dto.ClientDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListingDto {

    private UUID listingUUID;

    private String title;

    private ClientDto seller;

    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime postedDateTime;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime availabilityPeriodStart;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime availabilityPeriodEnd;

    private Integer minimumRentalDays;

    private BigDecimal pricePerMinimumPeriod;

    private String season;

    private String equipmentType;

    private String equipmentCondition;
}
