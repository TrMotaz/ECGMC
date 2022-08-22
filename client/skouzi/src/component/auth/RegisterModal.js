import React, {useState} from 'react'
import {Modal,Label,Input,Form,NavLink,Button} from "reactstrap"
import {useDispatch} from "react-redux"
import {registerUser} from '../../redux/actions/authActions'
import {useNavigate} from 'react-router-dom'
function RegisterModal() {

    const[modal, setModal]=useState(false)
    const[name, setName]=useState('')
    const[lastName, setLastName]=useState('')
    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')
    const dispatch=useDispatch()
    let navigate= useNavigate()

    const toggle=()=>{
        setModal(!modal)
    }
    const handleRegister=()=> {
        const newUser={name,lastName,email,password}
        dispatch(registerUser(newUser))
        navigate("/dashboard")
        toggle()
    }
  return (
    <div>
        <NavLink onClick={toggle} href="#">Register</NavLink>
        <Modal isOpen={modal}>

    <section className="vh-100 background-color: #eee;">
    <div className="container wh-80">
      <div className="row d-flex justify-content-center align-items-center wh-70">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black border-radius: 100px">
            <div className="card-body p-md-30 mt-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
             
                  <p className="text-center h1 fw-bold mb-5 mx-center mx-md-center mt-4">Sign up</p>
         
                  <Form className="mx-1 mx-md-4">
                        
                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <Input type="text" id="name" className="form-control" onChange={(e)=>setName(e.target.value)}/>
                        <Label className="form-label" for="form3Example1c">Name</Label>
                      </div>
                    </div>
                    
                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <Input type="text" id="last-name" className="form-control" onChange={(e)=>setLastName(e.target.value)} />
                        <Label className="form-label" for="form3Example1c">LastName</Label>
                      </div>
                    </div>
                    
                    <div className="d-flex flex-row align-items-center mb-2">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <Input type="email" id="e-mail" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
                        <Label className="form-label" for="form3Example3c">Email</Label>
                      </div>
                    </div>
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <Input type="password" id="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} />
                        <Label className="form-label" for="form3Example4c">Password</Label>
                      </div>
                    </div>
  

                    
                    <div className="d-flex justify-content-center mx-4 mb-0 mb-lg-0">
                      <Button type="button" className="btn btn-primary btn-lg" onClick={handleRegister}>Register</Button>
                    </div>
                  </Form>
                
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample" />
  
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

export default RegisterModal