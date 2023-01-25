import { BASE_URL } from "./config";

export default {
  getExam: async ()=>{
    try {
      const response = await fetch(BASE_URL+'/')
    } catch (error) {
      throw error;
    }
  },
}