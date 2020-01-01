import { useState } from 'react';

const useForm = (callback, customValues) => {
    const [values, setValues] = useState(customValues)

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        callback()
    }

    return {
        handleChange,
        handleSubmit,
        values
    }
}

export default useForm;