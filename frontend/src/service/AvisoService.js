import { BASE_URL } from './config';

export default {

  getAnnonucement:async ()=>{
    try {
      const response = await fetch(`${ BASE_URL }/announcement`)
      const data = await response.json()
      return data
    } catch (error) {
      throw error
    }

  },
  CreateAnnonucement: async(Annonucement)=>{
    try {
      const response  = await fetch(`${BASE_URL}/announcement`,{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(Annonucement)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error
    }
  },
  DeleteAnnonucement: async (id)=>{
    try {
      const response = await fetch(`${ BASE_URL }/announcement/${id}`,{
        method:'DELETE'
      })
      const data = await response.json();
      return data;
      
    } catch (error) {
      // throw error;
    }
  },

}