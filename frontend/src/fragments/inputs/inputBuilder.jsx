import BasicInput from "./basicInput";
import TextAreaInput from "./textareaInput"; 
import RadioInput from "./radioInput";
import SelectInput from "./selectInput";
import CheckBoxInput from "./checkBoxInput";
import FileInput from "./fileInput";
import IpInput from "./ipInput";

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
    case 'ip':
      return <IpInput input={input}/>
    case 'subSeccion':
        return <h3>{input.label}</h3>
    default:
      return <BasicInput input={input}/>
  }
}

export default InputBuider;