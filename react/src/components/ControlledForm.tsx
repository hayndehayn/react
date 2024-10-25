import React, { useState } from 'react';

function ControlledForm() {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Submitted ${inputValue}`);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            <label>
                Controlled Input:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ControlledForm;