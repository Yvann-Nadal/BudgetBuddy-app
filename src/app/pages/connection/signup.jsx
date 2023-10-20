import { useState } from "react";
import TokenService from "../../../setup/token.service";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [user, setUser] = useState([])
    const navigate = useNavigate();


    const createUser = async () => {
        const res = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user               
                )
        })
        const data = await res.json();
        }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
        navigate('/signin');
    }

    console.log("user", user);


    return ( 
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={handleChange} />
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" onChange={handleChange}/> 
                <button type="submit">Signup</button>
            </form>
        </div>
     );
}
 
export default Signup;