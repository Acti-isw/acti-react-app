import { BASE_URL } from "./config";

export default {
  getRetos:async ()=>{
    try {
      const response = await fetch(`${BASE_URL}/challenge`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  getRetosByTopic: async (id)=>{
    try {
      const response = await fetch(`${BASE_URL}/challenge`);
      const data = await response.json();
      return data.filter((reto)=>reto.tema==id);
    } catch (error) {
      throw error;
    }
  },
  getReto:async(id)=>{
    try {
      const response = await fetch(`${BASE_URL}/challenge/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}