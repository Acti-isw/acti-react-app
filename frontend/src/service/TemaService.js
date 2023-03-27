import { BASE_URL } from "./config";

export default{

  getTopics:async ()=>{
    try {
      const response = await fetch(`${BASE_URL}/topic`)
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  },
  getTopic: async (id)=>{
    try {
      const response = await fetch(`${BASE_URL}/topic/${id}`)
      const data = await response.json();
      return data;
    } catch (error) {
      
    }

  },
  updateTopic: async ()=>{

  },
  createTopic:async ()=>{

  },
  deleteTopic:async ()=>{

  },
  
}