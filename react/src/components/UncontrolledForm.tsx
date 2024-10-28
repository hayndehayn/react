import React, { useRef } from 'react';
function UncontrolledForm() {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(`Submitted value: ${inputRef.current?.value}`);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
            <label>
                UncontrolledInput:
                <input type="text" ref={inputRef} />
            </label>
            <button type="submit">Submit</button>
            </form>
        </>
    );
}
export default UncontrolledForm;