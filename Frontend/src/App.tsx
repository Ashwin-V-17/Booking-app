import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
const App=()=>{
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Layout>
          <p>HomePage</p>
         </Layout>}/>
        <Route path="/search" element={<Layout>
          <p>SearchPage</p>
         </Layout>}/>
         <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Navigate to="/"></Navigate>}/>
        
      </Routes>
    </Router>
  )
};
export default App;