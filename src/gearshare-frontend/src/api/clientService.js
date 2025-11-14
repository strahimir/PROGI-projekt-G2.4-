import api from './axios'

export async function getClients() {
    try {
        const response = await api.get('/clients')
        return response.data
    } catch (error) {
        console.error('Failed to fetch clients:', error)
        return []
    }
}

export async function getClientByUUID(clientUUID) {
    try {
        const response = await api.get(`/clients/${clientUUID}`)
        return response.data
    } catch (error) {
        console.error(`Failed to fetch client with UUID ${clientUUID}:`, error)
        return null
    }
}

export async function getClientByUsername(username) {
    try {
        const response = await api.get(`/clients/profiles/${username}`)
        return response.data
    } catch (error) {
        console.error(`Failed to fetch client with username ${username}:`, error)
        return null
    }
}

export async function createClient(clientDto) {
    try {
        const response = await api.post('/clients', clientDto)
        return response.data
    } catch (error) {
        console.error('Failed to create client:', error)
        return null
    }
}

export async function fullUpdateClient(clientUUID, clientDto) {
    try {
        const response = await api.put(`/clients/${clientUUID}`, clientDto)
        return response.data
    } catch (error) {
        console.error(`Failed to update client ${clientUUID}:`, error)
        return null
    }
}

export async function partialUpdateClient(clientUUID, clientDto) {
    try {
        const response = await api.patch(`/clients/${clientUUID}`, clientDto)
        return response.data
    } catch (error) {
        console.error(`Failed to partially update client ${clientUUID}:`, error)
        return null
    }
}

export async function deleteClient(clientUUID) {
    try {
        await api.delete(`/clients/${clientUUID}`)
        return true
    } catch (error) {
        console.error(`Failed to delete client ${clientUUID}:`, error)
        return false
    }
}
