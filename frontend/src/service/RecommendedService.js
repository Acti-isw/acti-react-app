import { json } from "react-router-dom";
import { BASE_URL } from "./config";

export default{
  getRecommended: async ()=>{
    try {
      const response = await fetch(BASE_URL+'/recommended')
      const data = response.json();
      return data;
      
    } catch (error) {
      throw error
    }
  },
  getRecommendedById: async (id)=>{
    try {
      const response = await fetch(BASE_URL+`/recommended/${id}`)
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  createRecommended: async (recommended)=>{
    try {
      const response = await fetch(BASE_URL+'/recommended',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(recommended)
      })
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  updateRecommended: async (id,recommended)=>{
    try {
      const response = await fetch(BASE_URL+`/recommended/${id}`,{
        method:'PATCH',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(recommended)
      })
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  },
  deleteRecommended: async (id) =>{
    try {
      const response = await fetch(BASE_URL+`/recommended/${id}`,{
        method:'DELETE'
      })
      const data = response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}