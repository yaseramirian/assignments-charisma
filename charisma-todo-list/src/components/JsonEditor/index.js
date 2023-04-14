import { useState } from "react";
import { Alert } from "react-bootstrap";

function JsonEditor({ json, onChange }) {
  const [value, setValue] = useState(json);
  const [hasError, setHasError] = useState(false);

  const validateJson = (json) => {
    try {
      JSON.parse(json);
    } catch (e) {
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const currentValue = e.target.value;
    setValue(currentValue);

    if (validateJson(e.target.value)) {
      if (hasError) {
        setHasError(false);
      }
      onChange(currentValue);
    } else {
      setHasError(true);
    }
  };

  return (
    <>
      <textarea
        className='mt-4 w-100'
        value={value}
        rows={5}
        onChange={handleChange}
      />

      {hasError && <Alert>Json is invalid</Alert>}
    </>
  );
}

export default JsonEditor;
