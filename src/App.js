import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Welcome from "./components/Welcome/Welcome";
import ChatBox from "./components/Chatbox/Chatbox";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={user ? <Navigate to="/chat"/> : <Welcome/>}/>
            <Route path="/chat" element={user ? <ChatBox/> : <Navigate to="/"/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          {/* {!user ? <Welcome /> : <ChatBox />} */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
