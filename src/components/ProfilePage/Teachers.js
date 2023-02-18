import classes from '../../styles/Teachers.module.css'
import QueueComponent from '../HomePage/QueueComponent';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { Fade } from "react-awesome-reveal";
function Teacher(){

    var array=[1,2,3,4,5]
    function slideLeft(){
        var slider = document.getElementById('courses');
        slider.scrollLeft = slider.scrollLeft-400

    }

    function slideRight(){
        var slider = document.getElementById('courses');
        slider.scrollLeft = slider.scrollLeft+400

    }

    return(
        <>
            <div className={`${classes.bg} container-fluid`}>

            </div>
            <div className='container'>

                <div className={`${classes.profilepic} m-auto`}></div>

                <div className='row mt-3 d-flex justify-content-center'>

                    <div className='col-8 d-flex justify-content-center mb-5'>
                        <div className='rounded-pill bg-secondary p-2 px-4 mx-3 text-light'>English</div>
                        <div className='rounded-pill bg-secondary p-2 px-4 mx-3 text-light'>Cantonese</div>
                        <div className='rounded-pill bg-secondary p-2 px-4 mx-3 text-light'>Punjabi</div>
                    </div>

                    <div className={`col-12 col-md-8 d-flex justify-content-between ${classes.text}`}>
                        <div><h2>John Doe</h2></div>
                        <div>
                            <button type='btn' className='btn btn-outline-primary rounded'>Follow +</button>
                        </div>
                    </div>

                    <div className={`col-12 col-md-8 d-flex my-3 flex-column justify-content-between ${classes.text}`}>
                        <div><big><b>300+</b></big> <span className={classes.greycolor}>students </span>&emsp;&emsp;<big><b>5</b></big> <span className={classes.greycolor}>courses</span></div>
                        <p className='my-5'>
                        Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality). Choose the path that leaves you more equanimous.
                        Pain is always there. Just get used to its presence. So is hardword. The bigger the goal, the greater the sacrifice it demands.
                        </p>
                        <h5>
                            <a className={classes.links} href="google.com">More About Me...</a>
                        </h5>
                    </div>

                </div>

                <div className='row my-5'>
                
                    <div className='col-12 d-flex flex-column align-items-center'>
                        <Fade direction='up' triggerOnce>
                        <h2 className='my-5'>Courses I Teach</h2>
                        </Fade>
                        <div className='row d-flex justify-content-center'>
                            
                            <div className={`col-8 col-lg-10`} style={{position:'relative'}}>
                            <MdChevronLeft className={classes.sliderIconsLeft} size={40} onClick={slideLeft}/>
                                <div id='courses' className={`w-100 ${classes.queue_container}`}>
                                    {array.map(item=>
                                        <QueueComponent />
                                    )}
                                </div>
                                
                                <MdChevronRight className={classes.sliderIconsRight} size={40} onClick={slideRight} />
                            </div>
                            
                
                        </div>
                    </div>
                
                </div>

                <div className='row my-5 py-5 d-flex justify-content-center'>
                    <div className='col-12 col-md-8 py-3 shadow d-flex flex-column'>
                        <div className={classes.hi}>
                            <div className={`w-100 d-flex flex-column justify-content-center align-items-center ${classes.contact}`}>
                                <h1 className='my-4'>Contact Information</h1>
                                <p className='my-4'>Fill out the form and I will try my best to get back !</p>
                                <div className='my-4'><b><i className="fa-solid fa-envelope"></i> &emsp;sample@example.com</b></div>
                                <div className='my-4'><b><i className="fa-solid fa-phone"></i> &emsp;+1 123 XXXXXXX</b></div>
                            </div>
                        </div>
                        <div className='w-100'>
                        <form className='needs-validation w-100 p-4' noValidate method='POST' action=''>
                        <div>
                            <label for="nameInput" className="form-label">Name</label>
                            <input type="text" className="form-control" id="nameInput" placeholder="John" required />
                        </div>
                        <div className='my-3'>
                            <label for="emailInput" className="form-label">Email</label>
                            <input type="email" className="form-control" id="emailInput" placeholder="abc@exmaple.com" required />
                        </div>
                        <div className='my-3'>
                            <label for="contactInput" className="form-label">Contact No.</label>
                            <input type="text" className="form-control" id="contactInput" placeholder='+1 540 XXXXXXXX' required />
                        </div>
                        <div className='my-3'>
                            <label for="subjectInput" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subjectInput" placeholder='' required />
                        </div>
                        <div className='my-3'>
                            <label for="messageInput" className="form-label">Message</label>
                            <textarea style={{height:'100px'}} type="text" className="form-control" id="messageInput" placeholder='' required />
                        </div>
                        <div className='my-4'>
                            <button type='submit' className='btn btn-success'>Submit</button>
                        </div>
                    </form>
                        </div>
                    </div>               
                </div>

            </div>
            
        </>
    )
}
export default Teacher;