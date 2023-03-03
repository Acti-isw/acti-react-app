import { useState } from "react";

function IpInput({ input }) {

  const [value, setValue]= useState(input.value);
  
  function handleOnchange(e){
    let word = e.target.value;
    console.log(word);
  }

  return (
      <>
          <label>
              {input.label}
              <input
                  className="input_type1"
                  required={input.required}
                  name={input.name}
                  type={input.inputType}
                  defaultValue={input.value}
                  placeholder={input.placeholder}
                  disabled= {input.disable}
                  checked={input.checked}
              />
          </label>
      </>
  );
}
export default IpInput;
