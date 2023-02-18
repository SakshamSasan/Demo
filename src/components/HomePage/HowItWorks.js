import { Fade } from "react-awesome-reveal";
import {Zoom} from 'react-awesome-reveal'
import classes from '../../styles/HowItWorks.module.css'
function HowItWorks(){

    
    return(
        <div className='container my-5'>
            <Fade direction='up' triggerOnce='true'>
            <h2 className='m-auto d-flex justify-content-center pt-5 mb-4'>How it Works ?</h2>
            </Fade>
            <div className='row d-flex justify-content-center py-5'>
                
                <div className="col-11 col-md-4 ">
                    <Fade direction="left" triggerOnce className="w-100 d-flex flex-column justify-content-center align-items-center">
                    <div className={classes.picContainer}>
                        <div className={classes.choose}>

                        </div>
                    </div>
                    <h4 className="my-5">Choose your Teacher</h4>
                    <p>
                        Review from a wide variety of courses available and select the teacher that best suits you. We offer 1:1 live sessions and video conferencing
                    </p>
                    </Fade>
                </div>
                
                
                <div className="col-11 col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <Fade direction="up" triggerOnce className="w-100 d-flex flex-column justify-content-center align-items-center">
                    <div className={classes.picContainer}>
                        <div className={classes.book}>

                        </div>
                    </div>
                    <h4 className="my-5">Book your Lesson</h4>
                    <p>
                        After selecting your teacher and course, book lessons according to your availability. The scheduling options are flexible and you can book according to what works best for you
                    </p>
                    </Fade>
                </div>
             
             
                <div className="col-11 col-md-4 d-flex flex-column  align-items-center">
                    <Fade direction="right" triggerOnce className="w-100 d-flex flex-column  align-items-center">
                    <div className={classes.picContainer}>
                        <div className={classes.start}>

                        </div>
                    </div>
                    <h4 className="my-5">Start your Journey</h4>
                    <p>
                        And that's it! You can now start your journey and learn different languages to grow your skill set
                    </p>
                    </Fade>
                </div>
            </div>
            
        </div>
    )
}
export default HowItWorks;