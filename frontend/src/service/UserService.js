import { BASE_URL } from './config';

export default {
    getUsers: async () => {
        try {
            const response = await fetch(`${BASE_URL}/user`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },

    getUser: async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/user/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },

    createUser: async (user) => {
        try {
            const response = await fetch(`${BASE_URL}/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    },

    updateUser: async (id, user) => {
        console.log(JSON.stringify(user));
        try {
            const response = await fetch(`${BASE_URL}/user/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            //throw error;
        }
    },

    deleteUser: async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/user/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            return data;
        } catch (error) {
            // throw error;
        }
    }
};
