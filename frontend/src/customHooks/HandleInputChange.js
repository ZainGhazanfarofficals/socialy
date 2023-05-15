import React from 'react';

const useInputChange = (initialState) => {
    const [value, setValue] = React.useState(initialState);
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    return [value, handleChange];
};

const useInputFileChange = (defaultPreviewValue) => {
    const [value, setValue] = React.useState();
    const [previewValue, setPreviewValue] = React.useState(defaultPreviewValue);

    const handleChange = (event) => {
        setValue(event.target.files[0]);
        if(event.target.files[0] === undefined) return setPreviewValue(defaultPreviewValue);
        setPreviewValue(URL.createObjectURL(event.target.files[0]));
    };

    return [value, handleChange, previewValue];
};

export { useInputChange, useInputFileChange };