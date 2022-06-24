import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AuthorForm = (props) => {
    const {initialName, onSubmitProp, errors} = props;
    const [name, setName] = useState(initialName);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name.length <= 2) {
            return errors;
        }
        if(errors.length === 1) {
            history.push("/")
        }

        onSubmitProp(
            name
        );

        setName("");

        history.push('/authors')
    }

    const pushHome = () => {
        history.push('/authors')
    }

    const input = ["input"]
    const button = ["button"]

    return (
        <form onSubmit={handleSubmit}>
            <div className="form">
                <label>Name:</label>
                <input 
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={input.join(" ")} />
                {errors.map((error, index) => <p key={index} className="text-danger">{error}</p>)}
                <button
                className={button.join(" ")}>
                    Submit
                </button>
                <button
                onClick={pushHome}
                className={button.join(" ")}>
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default AuthorForm
