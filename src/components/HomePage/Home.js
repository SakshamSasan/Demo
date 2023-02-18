import classes from '../../styles/Home.module.css'
import Queue from './Queue'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'

function Home() {

    const style={
        wrapper:{
            position:'relative',
            backgroundColor:'black',
        }
    }
    return(
        <>
        <div className={`container-fluid ${classes.extra_ctr}`}>
            <div className='row d-flex pt-5 justify-content-lg-center'>
                <div className='col-12 col-lg-5 order-2 order-lg-1 mb-4 mb-lg-0 d-flex flex-column align-items-center pt-5'>
                    <h1 className={`${classes.heading1} animate__animated animate__fadeInLeft my-2`}>Knowledge &nbsp;anywhere,</h1>
                    <h1 className={`${classes.heading2} animate__animated animate__fadeInLeft my-2`}>anytime</h1>
                    <h5 className={`${classes.heading1} w-75 animate__animated animate__fadeInLeft my-3`}><i>Join us today and learn from the best teachers. We will help you in achieving your language goals.</i></h5>
                    <button type='button' className={`w-75 my-5 btn btn-success`}>Book your Lesson</button>
                </div>
                <div className='col-12 col-lg-5 order-1 order-lg-2 my-3 my-lg-0 d-flex justify-content-center'>
                    <div className='w-75 d-flex justify-content-center justify-content-lg'>
                        <div className={`animate__animated animate__fadeInRight ${classes.demo_img}`}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid mb-5" style={style.wrapper}>
        <div className={classes.wave}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
            </svg>
        </div>
        </div>

        <Queue />

        <HowItWorks />
        
        <Testimonials />
        
        </>
    )
}

export default Home;