package com.gearshare.gearshare.specifications;

import com.gearshare.gearshare.domain.entities.ListingEntity;
import com.gearshare.gearshare.filters.ListingsFilter;
import com.jayway.jsonpath.Criteria;
import jakarta.persistence.criteria.Expression;
import jakarta.persistence.criteria.Path;
import org.springframework.data.jpa.domain.Specification;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Set;

public final class ListingSpecification {

    public static final String AVAILABILITY_PERIOD_START = "availabilityPeriodStart";
    public static final String AVAILABILITY_PERIOD_END = "availabilityPeriodEnd";
    public static final String MINIMUM_RENTAL_DAYS = "minimumRentalDays";
    public static final String PRICE_PER_MINIMUM_PERIOD = "pricePerMinimumPeriod";
    public static final String SEASON = "season";
    public static final String EQUIPMENT_TYPE = "equipmentType";
    public static final String EQUIPMENT_CONDITION = "equipmentCondition";

    private ListingSpecification(){}

    public static Specification<ListingEntity> filterBy(ListingsFilter listingsFilter){
        return ListingSpecification.hasAvailabilityWindowOverlap(listingsFilter.availabilityPeriodStart(), listingsFilter.availabilityPeriodEnd())
                .and(hasPricePerDayInRange(listingsFilter.minPricePerDay(), listingsFilter.maxPricePerDay()))
                .and(hasMinimumRentalDaysInRange(listingsFilter.minRentalDays(), listingsFilter.maxRentalDays()))
                .and(hasSeasons(listingsFilter.seasons()))
                .and(hasEquipmentTypes(listingsFilter.equipmentTypes()))
                .and(hasEquipmentConditions(listingsFilter.equipmentConditions()));
    }

    private static Specification<ListingEntity> hasEquipmentConditions(Set<String> equipmentConditions) {
        return ((root, query, cb) -> {

            if( equipmentConditions == null || equipmentConditions.isEmpty() ) return cb.conjunction();

            return root.get(EQUIPMENT_CONDITION).in(equipmentConditions);
        });
    }

    private static Specification<ListingEntity> hasEquipmentTypes(Set<String> equipmentTypes) {
        return ((root, query, cb) -> {

            if( equipmentTypes == null || equipmentTypes.isEmpty() ) return cb.conjunction();

            return root.get(EQUIPMENT_TYPE).in(equipmentTypes);
        });
    }

    private static Specification<ListingEntity> hasSeasons(Set<String> seasons) {
        
        return ((root, query, cb) -> {
            
            if(  seasons == null || seasons.isEmpty() ) return cb.conjunction();

            return root.get(SEASON).in(seasons);
        });
    }

    private static Specification<ListingEntity> hasMinimumRentalDaysInRange(Integer minDays, Integer maxDays) {

        return ((root, query, cb) -> {

            if( minDays == null && maxDays == null ) return cb.conjunction();


            Path<Integer> minimumRentalDays = root.get(MINIMUM_RENTAL_DAYS);

            if ( minDays != null && maxDays != null ){
                return cb.between(minimumRentalDays, minDays, maxDays);
            } else if ( minDays != null ) {
                return cb.greaterThanOrEqualTo(minimumRentalDays, minDays);
            } else {
                return cb.lessThanOrEqualTo(minimumRentalDays, maxDays);
            }
        });
    }

    private static Specification<ListingEntity> hasPricePerDayInRange(BigDecimal minPrice, BigDecimal maxPrice) {

        return ((root, query, cb) -> {
            if (minPrice == null && maxPrice == null) return cb.conjunction();

            Expression<BigDecimal> pricePerDay = cb.quot(root.get(PRICE_PER_MINIMUM_PERIOD),root.get(MINIMUM_RENTAL_DAYS)).as(BigDecimal.class);

            if( minPrice != null && maxPrice != null){

                return cb.between(pricePerDay, minPrice, maxPrice);

            } else if ( minPrice != null ) {

                return cb.greaterThanOrEqualTo(pricePerDay, minPrice);

            } else {

                return cb.lessThanOrEqualTo(pricePerDay, maxPrice);
            }

        });
    }

    private static Specification<ListingEntity> hasAvailabilityWindowOverlap(LocalDateTime queryStart, LocalDateTime queryEnd) {

        return (root, query, cb) -> {
            if(queryStart == null && queryEnd == null) return  cb.conjunction();

            Path<LocalDateTime> listingStart = root.get(AVAILABILITY_PERIOD_START);
            Path<LocalDateTime> listingEnd = root.get(AVAILABILITY_PERIOD_END);

            if(queryStart != null && queryEnd != null) {

                return cb.and(
                        cb.greaterThanOrEqualTo(listingEnd, queryStart),
                        cb.lessThanOrEqualTo(listingStart, queryEnd)
                );
            } else if (queryStart != null) {
                return cb.greaterThanOrEqualTo(listingEnd, queryStart);
            } else {
                return cb.lessThanOrEqualTo(listingStart, queryEnd);
            }
        };
    }


}
