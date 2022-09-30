import { Col, Container, Row } from "react-bootstrap"
import { Route ,Routes} from "react-router-dom"
import "./app.css"
import Login from './components/Login'
import Home from "./components/Home";
import Signup from "./components/signup"
import {UserAuthContextProvider} from "./context/userAuthContext"
import ProtectedRoute from "./components/protectedRoute";
const App =()=>{
  return(
   <Container>
    <Row>
      <Col>
       <UserAuthContextProvider>
       <Routes>
         <Route path='/' element={<Login/>}/>
         <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
         <Route path ='/signup' element={<Signup/>}/>
       </Routes>
       </UserAuthContextProvider>
      </Col>
    </Row>
   </Container>
  )
}

export default App 