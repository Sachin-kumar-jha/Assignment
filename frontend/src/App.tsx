import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          
          {/* Protect Dashboard */}
          <Route element={<ProtectedRoute/>}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Signin/>} />
        </Routes>
      </Router>
      <ToastContainer position="top-center" autoClose={3000} theme="light"   closeButton={true} 
  toastStyle={{
    backgroundColor:"#000", 
    color: "#fff",
    fontSize: "16px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    padding: "12px", 
    minHeight: "40px",
  }}/>

      </>
  );
}

export default App;
