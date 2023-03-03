import { BASE_URL } from './config';

export default {
    getRoles: async () => {
        try {
            const response = await fetch(`${BASE_URL}/role`);
            const data = await response.json();
            return data;
        } catch (error) {
          
        }
    }
};
