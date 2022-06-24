import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const Create = (props) => {
    const [errors, setErrors] = useState([]);

    const createAuthor = Author => {
        axios.post('http://localhost:8000/api/authors/new', Author)
            .then(response => console.log(response))
            .catch(err => {
                const errorArray = [];
                const errorResponse = err.response.data.errors;
                for (const key of Object.keys(errorResponse)) {
                    errorArray.push(errorResponse[key].message)
                }
                setErrors(errorArray);
            })
    }

    return (
        <>
            <h1>Favorite Authors</h1>
            <Link to="/authors">Home</Link>
            <p>Add a New Author:</p>
            <AuthorForm 
            initialName=""
            errors={errors}
            onSubmitProp={createAuthor} />
        </>
    )
}

export default Create