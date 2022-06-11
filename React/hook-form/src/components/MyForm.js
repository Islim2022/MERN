import React, { useState } from 'react'

const MyForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [errorFlag, setErrorFlag] = useState(false);
    const [errorFlag2, setErrorFlag2] = useState(false);

    const [lastName, setLastName] = useState("");
    const [errorFlag3, setErrorFlag3] = useState(false);
    const [errorFlag4, setErrorFlag4] = useState(false);

    const [email, setEmail] = useState("");
    const [errorFlag5, setErrorFlag5] = useState(false);
    const [errorFlag6, setErrorFlag6] = useState(false);

    const [password, setPassword] = useState("");
    const [errorFlag7, setErrorFlag7] = useState(false);
    const [errorFlag8, setErrorFlag8] = useState(false);

    const [conPass, setConPass] = useState("");
    const [ errorFlag9, setErrorFlag9] = useState(false);
    const [errorFlag10, setErrorFlag10] = useState(false);

    const submit =(e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, conPass};
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
        setConPass("");

        if(firstName === "") {
            setErrorFlag(true)
            setErrorFlag2(false)
        } else {
            setErrorFlag(false)
            if(firstName.length < 2) {
                setErrorFlag2(true)
            } else {
                setErrorFlag2(false)
            }
        }
        if(lastName === "") {
            setErrorFlag3(true)
            setErrorFlag4(false)
        } else {
            setErrorFlag3(false)
            if(lastName.length < 2) {
                setErrorFlag4(true)
            } else {
                setErrorFlag4(false)
            }
        }
        if(email === "") {
            setErrorFlag5(true)
            setErrorFlag6(false)
        } else {
            setErrorFlag5(false)
            if(email.length < 10) {
                setErrorFlag6(true)
            } else {
                setErrorFlag6(false)
            }
        }
        if(password === "") {
            setErrorFlag7(true)
            setErrorFlag8(false)
        } else {
            setErrorFlag7(false)
            if(password.length < 8) {
                setErrorFlag8(true)
            } else {
                setErrorFlag8(false)
            }
        }
        if(conPass === "") {
            setErrorFlag9(true)
            setErrorFlag10(false)
        } else {
            setErrorFlag9(false)
            if(conPass != password) {
                setErrorFlag10(true)
            } else {
                setErrorFlag10(false)
            }
        }
    }
    const handleFirstName=(e)=>{
        setFirstName(e.target.value)
    }
    const handleLastName=(e)=>{
        setLastName(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePass=(e)=>{
        setPassword(e.target.value)
    }
    const handleConPass=(e)=>{
        setConPass(e.target.value)
    }

    return (
    <div className='container'>
        <form onSubmit={submit}>
        <div>
            <label className='form-label'>First Name: </label>
            <input type="text" value={firstName} onChange={handleFirstName}></input>
            {errorFlag ? <p style={{color:'red'}}>* First Name cannot be empty!</p> : null}
            {errorFlag2 ? <p style={{color:'red'}}>* First Name must be more than 2 characters</p> : null}
        </div>
        <br></br>
        <div>
            <label className='form-label'>Last Name: </label>
            <input type="text" value={lastName} onChange={handleLastName}></input>
            {errorFlag3 ? <p style={{color:'red'}}>* LastName cannot be empty!</p> : null}
            {errorFlag4 ? <p style={{color:'red'}}>* Last Name must be more than 2 characters</p> : null}
        </div>
        <br></br>
        <div>
            <label className='form-label'>Email: </label>
            <input type="text" value={email} onChange={handleEmail}></input>
            {errorFlag5 ? <p style={{color:'red'}}>* Email cannot be empty!</p> : null}
            {errorFlag6 ? <p style={{color:'red'}}>* Email must be more than 10 characters</p> : null}
        </div>
        <br></br>
        <div>
            <label className='form-label'>Password: </label>
            <input type="text" value={password} onChange={handlePass}></input>
            {errorFlag7 ? <p style={{color:'red'}}>* Password cannot be empty!</p> : null}
            {errorFlag8 ? <p style={{color:'red'}}>* Password must be more than 8 characters</p> : null}
        </div>
        <br></br>
        <div>
            <label className='form-label'>Confirm Password: </label>
            <input type="text" value={conPass} onChange={handleConPass}></input>
            {errorFlag9 ? <p style={{color:'red'}}>* Confirm Password cannot be empty!</p> : null}
            {errorFlag10 ? <p style={{color:'red'}}>* Passwords do not match.</p> : null}
        </div>
        <button type="submit" value="Submit">Submit</button>
        </form>
        <div className="data">
            <h2>Your Form Data</h2>
            <label>First Name : </label>
            <label>{firstName}</label>
            <br></br>
            <label>Last Name : </label>
            <label>{lastName}</label>
            <br></br>
            <label>Email : </label>
            <label>{email}</label>
            <br></br>
            <label>Password : </label>
            <label>{password}</label>
            <br></br>
            <label>Confirm password : </label>
            <label>{conPass}</label>
            <br></br>
        </div>


    </div>
    )
}

export default MyForm