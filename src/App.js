import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
import { BrowserRouter, Routes, Route,} from 'react-router-dom';


function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/' element={<Success/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
