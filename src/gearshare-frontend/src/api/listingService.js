import api from './axios'

export async function createListing(sellerUUID, listingDto) {
    try {
        const response = await api.post(`/listings/seller/${sellerUUID}`, listingDto)
        return response.data
    } catch (error) {
        console.error(`Failed to create listing for seller ${sellerUUID}:`, error)
        return null
    }
}

export async function getListingsBySeller(sellerUUID) {
    try {
        const response = await api.get(`/listings/seller/${sellerUUID}`)
        return response.data
    } catch (error) {
        console.error(`Failed to fetch listings for seller ${sellerUUID}:`, error)
        return []
    }
}

export async function getAllListings() {
  try {
    const response = await api.get("/listings/all")
    return response.data
  } catch (error) {
    console.error("Failed to fetch all listings:", error)
    return []
  }
}

export async function getListingsPageable(options = {}) {
    try {
        const params = {
            availabilityStart: options.availabilityStart,
            availabilityEnd: options.availabilityEnd,
            minRentalDays: options.minRentalDays,
            maxRentalDays: options.maxRentalDays,
            minPricePerDay: options.minPricePerDay,
            maxPricePerDay: options.maxPricePerDay,
            seasons: options.seasons,
            equipmentTypes: options.equipmentTypes,
            equipmentConditions: options.equipmentConditions,
            pageNo: options.pageNo || 1,
            listingCount: options.listingCount || 50,
            sortBy: options.sortBy || ['availabilityPeriodStart,DESC']
        }

        const response = await api.get('/listings', { params })
        return response.data // <--------- Page<ListingDto>
    } catch (error) {
        console.error('Failed to fetch pageable listings:', error)
        return null
    }
}

export async function getListingByUUID(listingUUID) {
    try {
        const response = await api.get(`/listings/${listingUUID}`)
        return response.data
    } catch (error) {
        console.error(`Failed to fetch listing ${listingUUID}:`, error)
        return null
    }
}

export async function fullUpdateListing(listingUUID, listingDto) {
    try {
        const response = await api.put(`/listings/${listingUUID}`, listingDto)
        return response.data
    } catch (error) {
        console.error(`Failed to fully update listing ${listingUUID}:`, error)
        return null
    }
}

export async function partialUpdateListing(listingUUID, listingDto) {
    try {
        const response = await api.patch(`/listings/${listingUUID}`, listingDto)
        return response.data
    } catch (error) {
        console.error(`Failed to partially update listing ${listingUUID}:`, error)
        return null
    }
}

export async function deleteListing(listingUUID) {
    try {
        await api.delete(`/listings/${listingUUID}`)
        return true
    } catch (error) {
        console.error(`Failed to delete listing ${listingUUID}:`, error)
        return false
    }
}
