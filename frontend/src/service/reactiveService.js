import { BASE_URL } from "./config";

export default {
  getReactiveById:async (id)=>{
    try {
      const result = await fetch(`${BASE_URL}/reactive/${id}`)
      const data = await result.json();
      return data;
    } catch (error) {
      
    }
  },
  getReactivesExam: async(id)=>{
    try {
      const results = await fetch(`${BASE_URL}/reactive/topic/${id}`)
      const data = await results.json();
      return data;
    } catch (error) {
      console.log(error);
    }

  }
}