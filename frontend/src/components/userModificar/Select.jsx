import React, { useState, useEffect } from "react";
import Select from "react-select";

const MySelect = (props) => {
  const [selectedProps] = useState([props.defaultValues]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(selectedProps);
  }, [selectedProps]);

  const options = [
    { value: 1, label: "Admin" },
    { value: 2, label: "Miembro" }
  ];

  return (
    <>
      <Select
        defaultValue={selectedProps}
        // isMulti
        name="properties"
        options={options}
        // className="basic-multi-select"
        classNamePrefix="select"
        onChange={(e) => setValues(e)}
      />
      <pre>{JSON.stringify(values, 0, 2)}</pre>
    </>
  );
};

export default MySelect;
