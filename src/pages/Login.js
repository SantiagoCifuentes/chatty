
import { useState } from "react";
import { useAuth } from "../context/authContext"
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const[user,setUser]= useState({
    email:'',
    password: ''
})

const { login,loginWithGoogle,loginWithGitHub } = useAuth();

const navigate = useNavigate();

const [error,setError]= useState();

const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };


  
const handleGoogleSignin = async () => {
try {
  await loginWithGoogle();
  navigate("/");
} catch (err) {
  console.log(err);
}
};

const handleSubmit= async (e)=>{
    e.preventDefault()
    try {
       await login(user.email,user.password)
        navigate("/chat")//navega a una pagina en particular
    } catch (error) {
        if(error.code==="auth/weak-password")
        setError("La contraseña debe de ser de 6 o más carácteres")
    }
    
}

const handleGitHubSignin = async () => {
  try {
      await loginWithGitHub();
      navigate("/chat");
  } catch (err) {
      console.log(err);
  }
};

return(

    <div>

    {error  && <p>{error}</p> }
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input  className="p-2 bd-highlight " type="email" name = "email"placeholder="youremail@company.com" onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input className="p-2 bd-highlight " type="password" name="password" onChange={handleChange}/>

        <button>Login</button>
    </form>
    <button className="btn btn-secondary" onClick={handleGoogleSignin}>Inicia sesión con Google</button>
    <button  className="btn btn-secondary" onClick={handleGitHubSignin}>Inicia sesión con GitHub</button>
    </div>
)
}

