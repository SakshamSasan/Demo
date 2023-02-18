import Modal from 'react-bootstrap/Modal';
import classes from '../styles/Navbar.module.css';
function Login(props){
    return(
        <>
            <Modal {...props} centered>
                <Modal.Header closeButton className='border-0'>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className='py-1'>
                <form className='needs-validation w-100 p-4' noValidate method='POST' action=''>
                        
                        <div className='my-3'>
                            <label for="emailInput" className="form-label">Email</label>
                            <input type="email" className="form-control" id="emailInput" placeholder="abc@exmaple.com" required />
                        </div>
                        <div>
                            <label for="pwdInput" className="form-label">Password</label>
                            <input type="password" className="form-control" id="pwdInput" required />
                        </div>
                        <div className='my-4'>
                            <button type='submit' className={`w-100 btn rounded-pill ${classes.submit}`}>Submit</button>
                        </div>

                        <div className='my-2 d-flex justify-content-center align-items-center'>
                            <div className={`${classes.line} mx-1`}></div>
                            <div>OR</div>
                            <div className={`${classes.line} mx-1`}></div>
                        </div>
                    </form>

                    <div className='w-100 d-flex justify-content-center my-2' >
                        <div className={`rounded-pill border my-3 m-auto ${classes.googlepill}`}>
                        <div className={classes.iconGoogle}></div>Log In with Google</div>
                    </div>
                    <div className='w-100 d-flex justify-content-center' >
                        <div className={`rounded-pill border my-3 m-auto ${classes.fbpill}`}>
                        <div className={classes.iconFacebook}></div>Log In with Facebook</div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='border-0'>
                
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default Login;