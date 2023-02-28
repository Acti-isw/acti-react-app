import BasicInput from "./basicInput";
import TextAreaInput from "./textareaInput"; 
import RadioInput from "./radioInput";
import SelectInput from "./selectInput";
import CheckBoxInput from "./checkBoxInput";
import FileInput from "./fileInput";

function InputBuider({input}){
  switch(input.inputType){
    case 'textarea':
      return <TextAreaInput input={input}/>
    case 'select':
      return <SelectInput input={input}/>
    case 'radio':
      return <RadioInput input={input}/>
    case 'checkbox':
      return <CheckBoxInput input={input}/>
    case 'file':
      return <FileInput input={input}/>
    default:
      return <BasicInput input={input}/>
  }
}

export default InputBuider;