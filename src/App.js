import { Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/authContext'
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';



function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/Chat" element={<Chat />} />
        </Route>

        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}


export default App;