import { BASE_URL } from './config';

export default {
    getResources: async () => {
        try {
            const response = await fetch(BASE_URL + '/resource');
            const data = response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },
    getResourceById: async (id) => {
        try {
            const response = await fetch(BASE_URL + `/resource/${id}`);
            const data = response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },
    createResource: async (resource) => {
        try {
            const response = await fetch(BASE_URL + '/resource', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(resource)
            });
            const data = response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },
    updateResource: async (id, resource) => {
        try {
            const response = await fetch(BASE_URL + `/resource/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(resource)
            });
            const data = response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },
    deleteResource: async (id) => {
        try {
            const response = await fetch(BASE_URL + `/resource/${id}`, {
                method: 'DELETE'
            });
            const data = response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }
};
