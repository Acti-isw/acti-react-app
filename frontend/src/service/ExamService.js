import { BASE_URL } from "./config";

export default {
  getExam: async ()=>{
    try {
      const response = await fetch(BASE_URL+'/exam')
      const data = await response.json();
      return data; 
    } catch (error) {
      throw error;
    }
  },
  getExamById: async (id)=>{
    try {
      const response = await fetch(BASE_URL+`/exam/${id}`)
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  createExam: async (exam)=>{
    try {
      const response = await fetch(BASE_URL+'/exam',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(exam)
      })
      const data = await response.json()
      return data;
    } catch (error) {
      throw error;
    }
  },
  updateExam: async (id, exam)=>{
    try {
      const response = await fetch(BASE_URL+`/exam/${id}`,{
        method:'PATCH',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(exam)
      })
      const data = await response.json()
      return data;
    } catch (error) {
      throw error;
    }
  },
  deleteExam: async(id)=>{
    try {
      const response = await fetch(BASE_URL+`/exam/${id}`,{
        method:'DELETE'
      })
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  generateExam: async(idTopic, idUser)=>{
    const examReactives = [];
    
  }
}