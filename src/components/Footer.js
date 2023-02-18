import classes from '../styles/Footer.module.css'
import {Link} from 'react-router-dom'

function Footer(){
    return (
        <div className={`container-fluid ${classes.bg}`}>
            <div className='container'>
                <div className='row py-3'>
                    <div className='col-12 col-lg-6 my-3 my-lg-0'>
                        <div className='row'>
                            <div className='col-6 d-flex flex-column justify-content-center  align-items-center'>
                                <h3 className={`${classes.white} my-2`}>READY FOR</h3>
                                <h3 className={`${classes.white} my-2`}><span className={classes.red}>NEXT</span> LESSON ?</h3>
                            </div>
                            <div className='col-6 d-flex flex-column justify-content-center  align-items-center'>
                                <Link to='/Demo/about' style={styles.noDecoration}><h6 className={`${classes.white} my-1`}>About Us</h6></Link>
                                <Link to='/Demo/contact' style={styles.noDecoration}><h6 className={`${classes.white} my-1`}>Contact Us</h6></Link>
                                <Link to='' style={styles.noDecoration}><h6 className={`${classes.white} my-1`}>Services we offer</h6></Link>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 my-3 my-lg-0'>
                        <div className='row py-2'>
                            <div className='col-6 d-flex flex-column justify-content-center  align-items-center'>
                                <Link to='' style={styles.noDecoration}><h6 className={`${classes.white} my-1`}>Privacy Policy</h6></Link>
                                <Link to='/Demo/contact' style={styles.noDecoration}><h6 className={`${classes.white} my-1`}>FAQs</h6></Link>
                                <Link to='' style={styles.noDecoration}><h6 className={`${classes.white} my-1`}>Terms &amp; Conditions</h6></Link>
                                
                            </div>
                            <div className='col-6 d-flex flex-column justify-content-center  align-items-center'>
                                <h6 className={`${classes.white} my-1`}><i className="fa-brands fa-google"></i></h6>
                                <h6 className={`${classes.white} my-1`}><i className="fa-brands fa-facebook-f"></i></h6>
                                <h6 className={`${classes.white} my-1`}><i className="fa-brands fa-instagram"></i></h6>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
const styles={
    noDecoration:{
        textDecoration:'none'
    }
}
export default Footer;