import { Fade } from "react-awesome-reveal";
import classes from '../../styles/Testimonials.module.css'
import {Zoom} from 'react-awesome-reveal'
function Testimonials(){
    
    return(
        <div className='container my-5'>
            <Fade direction="up" triggerOnce>
                <h2 className='m-auto d-flex justify-content-center mb-4'>Testimonials</h2>
            </Fade>
            <div className='row mb-5'>
                <div className='col-6 col-lg-3 my-4 d-flex justify-content-center'>
                    <Zoom direction='in' triggerOnce>
                    <div className={`${classes.w_80} rounded d-flex flex-column p-4 align-items-center`}>
                        <div className={classes.bg}>

                        </div>
                        <div className='my-2' style={{fontWeight:'bold'}}>
                            Scholarist is so helpful in learning languages like English, Punjabi and
                            Spanish. I had an amazing experience.
                        </div>
                    </div>
                    </Zoom>
                </div>
                <div className='col-6 col-lg-3 my-4 d-flex justify-content-center'>
                    <Zoom direction='in' triggerOnce>
                    <div className={`${classes.w_80} rounded d-flex flex-column p-4 align-items-center`}>
                        <div className={classes.bg}>

                        </div>
                        <div className='my-2' style={{fontWeight:'bold'}}>
                            Scholarist is so helpful in learning languages like English, Punjabi and
                            Spanish. I had an amazing experience.
                        </div>
                    </div>
                    </Zoom>
                </div>
                <div className='col-6 col-lg-3 my-4 d-flex justify-content-center'>
                    <Zoom direction='in' triggerOnce>
                    <div className={`${classes.w_80} rounded d-flex flex-column p-4 align-items-center`}>
                        <div className={classes.bg}>

                        </div>
                        <div className='my-2' style={{fontWeight:'bold'}}>
                            Scholarist is so helpful in learning languages like English, Punjabi and
                            Spanish. I had an amazing experience.
                        </div>
                    </div>
                    </Zoom>
                </div>
                <div className='col-6 col-lg-3 my-4 d-flex justify-content-center'>
                    <Zoom direction='in' triggerOnce>
                    <div className={`${classes.w_80} rounded d-flex flex-column p-4 align-items-center`}>
                        <div className={classes.bg}>

                        </div>
                        <div className='my-2' style={{fontWeight:'bold'}}>
                            Scholarist is so helpful in learning languages like English, Punjabi and
                            Spanish. I had an amazing experience.
                        </div>
                    </div>
                    </Zoom>
                </div>
                
            </div>  
        </div>
    )
}
export default Testimonials;