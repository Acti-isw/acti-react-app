import { BASE_URL } from "./config";

export default {
  getReactiveById:async ()=>{

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