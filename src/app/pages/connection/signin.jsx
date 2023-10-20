import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TokenService from '../../../setup/token.service';

const Signin = () => {
    const [user, setUser] = useState([])
    const [userConnect, setUserConnect] = useState([])
    const navigate = useNavigate(); 
    
   

    const connectUser = async () => {
        const res = await fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(user)
        })
        const data = await res.json();
        TokenService.setTokenInLocalStorage(data.access_token);
        console.log(data.access_token); 
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        connectUser();
        navigate('/account');
    }





    return ( 
        <div>
            <h1>Signin</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">UserName</label>
                <input type="text" name="username" id="username" onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" onChange={handleChange}/>
                <button type="submit">Signin</button>
            </form>
        <Link href='/'> <button>S'inscrire</button></Link>
        </div>
        
     );
}
 
export default Signin;