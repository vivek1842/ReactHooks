import { useState } from "react";

const Main = () => {
    let [username,setUsername] = useState('');
    let [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        alert(username)
        e.preventDefault(); //stop from refreshing the component
    }
   
    return(
        <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label> 
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        </>
    )
}

export default Main;