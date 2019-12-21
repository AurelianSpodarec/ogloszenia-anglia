import React, { useState } from 'react';

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
        console.log(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
}

export default useFormInput;