import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = (props) => {
    const [authors, setAuthors] = useState([]);
    const history = useHistory();

    useEffect (() => {
        axios.get('http://localhost:8000/api/authors')
            .then(authors => setAuthors(authors.data))
    }, [authors])

    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(response => console.log(response))
    }

    const pushToEdit = (id) => {
        history.push('/authors/' + id + '/edit')
    }

    const button = ["button"]

    return (
        <>
        <h1>Favorite Authors</h1>
        <Link to="/authors/new">Add a New Author</Link>
        <p>we have quotes by:</p>
        <table className="table table-striped table table-hover">
            <thead>
                <tr>
                    <td>Author</td>
                    <td>Actions Available</td>
                </tr>
            </thead>
            <tbody>
                {authors.map((author, index) => (
                    <tr key={index}>
                        <td>{author.name}</td>
                        <td>
                            <button 
                            className={button.join(" ")}
                            onClick={pushToEdit}>
                                Edit
                            </button>
                            <button 
                            className={button.join(" ")}
                            onClick={deleteAuthor(author._id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </>
    )
}
export default Home