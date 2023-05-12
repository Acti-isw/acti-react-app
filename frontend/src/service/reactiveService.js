import TemaService from "./TemaService";
import { BASE_URL } from "./config";

function reactiveSum(reactives){
  return reactives.reduce(
    (accumulator, reactive) => accumulator + parseInt(reactive.valor), 0
  )
}

// function verify(exam, addReactive, maxScore){
//   return (reactiveSum(exam) + addReactive.valor) <= maxScore
// }

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
      const exam  = [];
      const temaData = await TemaService.getTopic(id);
      const results = await fetch(`${BASE_URL}/reactive/topic/${id}`)
      const data = await results.json();

      while(reactiveSum(exam)<temaData[0].maxScore){
        console.log(reactiveSum(exam), temaData[0].maxScore);
        const random = Math.floor(Math.random()*data.length);
        const randomReactive = data[random];
        // if(verify(exam, randomReactive, temaData[0].maxScore)){
          data.splice(random, 1)
          exam.push(randomReactive);
        // }
      }
      // console.log("Examen resultante ",exam);
      return exam;
    } catch (error) {
      console.log(error);
    }

  }
}