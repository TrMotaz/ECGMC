import { Button,Form,Input,Label,NavLink,Modal } from 'reactstrap'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { loginUser } from '../../redux/actions/authActions'

function LoginModal() {
  const[modal,setModal]=useState(false)
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const toggle = () => {
    setModal(!modal)
  }
  const dispatch=useDispatch()
  let navigate=useNavigate
  const handleLogin=()=>{
dispatch(loginUser(email,password))
navigate("/dashboard")
toggle()
  }
  return (
    <div> 
    <NavLink onClick={toggle} href="#">Login</NavLink>
    <Modal isOpen={modal}>

    <section className="vh-100 background-color: #9A616D;">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card border-radius: 1rem;">
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid border-radius: 1rem 0 0 1rem;" />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <Form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3 color: #ff6219;"></i>
                    <span className="h1 fw-bold mb-0">Logo</span>
                  </div>


                  <div className="form-outline mb-4">
                    <Input type="email" id="form2Example17" className="form-control form-control-lg" onChange={(e)=>setEmail(e.target.value)}/>
                    <Label className="form-label" for="form2Example17">Email address</Label>
                  </div>

                  <div className="form-outline mb-4">
                    <Input type="password" id="form2Example27" className="form-control form-control-lg" onChange={(e)=>setPassword(e.target.value)}/>
                    <Label className="form-label" for="form2Example27">Password</Label>
                  </div>

                  <div className="pt-1 mb-4">
                    <Button onClick={handleLogin} className="btn btn-dark btn-lg btn-block" type="button">Login</Button>
                  </div>

                  
                  
                </Form>

              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</section>  
</Modal>
</div>
  )

}

export default LoginModal

