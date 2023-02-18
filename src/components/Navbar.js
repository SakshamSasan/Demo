import classes from '../styles/Navbar.module.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';
function Navbar(){

    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignup] = useState(false);
    const handleClose = () => setShowLogin(false);
    const handleShow = () => setShowLogin(true);
    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);


    const style = {
        navdark:{
            backgroundColor:'rgb(0,0,0)'
        },
        header:{
            borderBottom: '0 none !important'
        },
        footer:{
            borderTop:'0 none !important'
        }
        
    }

    return(
        <>
            <Login show={showLogin}
            onHide={() => setShowLogin(false)}/>
            <SignUp show={showSignUp}
            onHide={() => setShowSignup(false)}/>
            <nav className="navbar navbar-expand-lg" style={style.navdark}>
            <div className="container">
                <div className='navbar-brand d-flex'>
                    <Link to='/Demo'>
                        <div className={`${classes.img_fit} ${classes.logo} me-3 animate__animated animate__fadeInDown`}>
                        
                        </div>
                    </Link>
                    
    
                </div> 

               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon `} style={{color:'white'}}><i className="fa-solid fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse  d-lg-flex justify-content-between align-items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mt-4 mt-lg-0 m-auto mb-2 mb-lg-0 w-adjust d-flex flex-column flex-lg-row justify-content-lg-end align-items-lg-center">
                            <li className={`nav-item d-inline-block my-3 mx-lg-4`}>
                                <div className={classes.dropdown}>
                                    <div className='animate__animated animate__fadeInDown'><b>Courses </b><i className="fa-solid fa-chevron-down"></i></div>
                                    <div className={`${classes.dropdown_content}`}>
                                        <div className='p-3 w-100'>IELTS English Courses</div>
                                        <div className='p-3 w-100'>IPLTS Punjabi Courses</div>
                                        <div className='p-3 w-100'>Spanish Courses</div>
                                    </div>
                                </div>
                                
                            </li>
                            <li className='nav-item my-2 my-lg-0 mb-3 mb-lg-0 mx-lg-4' style={{color:'white'}}>
                                <div className='animate__animated animate__fadeInDown'><b>Post a Request</b></div>
                            </li>
                            <li className='nav-item my-2 my-lg-0 mb-3 mb-lg-0 mx-lg-4'>
                                <button onClick={handleShow} type="button" className={`btn animate__animated animate__fadeInDown ${classes.btn_white}`}><b>Log In</b></button>
                            </li>
                            <li className='nav-item my-2 my-lg-0 mb-3 mb-lg-0 mx-lg-4'>
                                <button onClick={handleShowSignup} type="button" className={`btn btn-danger animate__animated animate__fadeInDown`}><b>Sign Up</b></button>
                            </li>
                        </ul>
                    </div>
                
                
                
                
            </div>
        </nav>
        </>
    )
}

export default Navbar;