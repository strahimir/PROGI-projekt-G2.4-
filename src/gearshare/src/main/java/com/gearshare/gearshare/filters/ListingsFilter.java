package com.gearshare.gearshare.filters;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Set;

public record ListingsFilter(LocalDateTime availabilityPeriodStart,
                             LocalDateTime availabilityPeriodEnd,
                             Integer minRentalDays,
                             Integer maxRentalDays,
                             BigDecimal minPricePerDay,
                             BigDecimal maxPricePerDay,
                             Set<String> seasons,
                             Set<String> equipmentTypes,
                             Set<String> equipmentConditions) {
}
