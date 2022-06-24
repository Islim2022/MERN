import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const Edit = (props) => {
    const {id} = useParams();
    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect (() => {
        let isMounted = true;
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(author => {
                if(isMounted) {
                    setAuthorName(author.data.name)
                }
            }) 
            return () => { isMounted = false};
    }, [id])

    const updateAuthor = (author) => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(console.log("Updated"))
            .catch(error => {
                const errorArray = [];
                const errorResponse = error.response.data.errors;
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
        <p>Edit This Author:</p>
        <AuthorForm 
        initialName={authorName}
        errors={errors}
        onSubmitProp={updateAuthor} />
        </>
    )
}

export default Edit;