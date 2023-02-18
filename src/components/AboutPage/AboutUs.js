import classes from '../../styles/About.module.css'


function AboutUs(){
    return (
        <>
        <div className={`container-fluid ${classes.black}`}>
            <div className='container py-5'>
                <div className='row py-5'>
                    <div class='col-12 col-lg-7 order-2 order-lg-1 d-flex flex-column align-items-center'>
                        <h1 className={`my-5 ${classes.heading} animate__animated animate__fadeInLeft`}>The futuristic platform to help students learn languages</h1>
                        <h5 className={`${classes.heading} animate__animated animate__fadeInLeft`}>Our mission is to ensure that no one has difficulty in learning different languages and communicate freely</h5>
                    </div>
                    <div class='col-12 col-lg-5 order-1 order-lg-2 d-flex justify-content-center'>
                        <div className='w-75'>
                            <div className={`animate__animated animate__fadeInRight ${classes.demo_img}`}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`container-fluid ${classes.story}`}>
            <div className='container py-5'>
                <div className='row py-5'>
                    <div class='col-12 col-lg-7 order-2 d-flex flex-column align-items-center'>
                        <h1 className={`my-5 animate__animated animate__fadeInRight`}>Our story</h1>
                        <p className='animate__animated animate__fadeInRight'>Scholarist was founded in 2016 to bridge the knowledge gap between colleges and industry. Founded by Ankush Singla, Kannu Mittal and Dhawal Parate, Scholarist boasts of world-class teaching faculty and a state-of-art learning platform for  education with faculty alumni of IIT, Stanford, IIIT and Facebook. Scholarist teaches more than 10 courses on different languages like English, Cantonese, Hindi, Punjabi, Arabic etc. The vision of the company is to empower students with linguistic tools that help in overcoming communication barriers. </p>
                    </div>
                    <div class='col-12 col-lg-5 order-1 d-flex justify-content-center'>
                        <div className='w-75'>
                            <div className={`animate__animated animate__fadeInLeft ${classes.demo_img}`}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid'>
            <div className='container py-5'>
                <div className='row py-4'>
                    <div className='col-12 px-2'>
                        <h1>Our Teachers</h1>
                    </div>
                </div>
                <div className='row py-5 d-flex justify-content-center'>
                    <div className='col-11 col-lg-5 my-3 mx-3 shadow p-4 rounded'>
                        <div className='row'>
                            <div className='col-4 d-flex justify-content-center'>
                                <div className={classes.teacher_img}>

                                </div>
                            </div>
                            <div className='col-8 d-flex flex-column justify-content-center'>
                                <h5 className='mb-2'>Ankush Singla</h5>
                                <p>IELTS Instructor</p>
                            </div>
                        </div>
                        <div className='row my-5'>
                            <div className='col-11'>
                            He holds a Bachelor’s degree in Computer Science from George Brown College and a Master’s degree in English from Stanford University. He is an English enthusiast and has worked with bigwigs like Amazon and Facebook in the past.
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-11 col-lg-5 my-3 mx-3 shadow p-4 rounded'>
                        <div className='row'>
                            <div className='col-4 d-flex justify-content-center'>
                                <div className={classes.teacher_img}>

                                </div>
                            </div>
                            <div className='col-8 d-flex flex-column justify-content-center'>
                                <h5 className='mb-2'>Ankush Singla</h5>
                                <p>IELTS Instructor</p>
                            </div>
                        </div>
                        <div className='row my-5'>
                            <div className='col-11'>
                            He holds a Bachelor’s degree in Computer Science from George Brown College and a Master’s degree in English from Stanford University. He is an English enthusiast and has worked with bigwigs like Amazon and Facebook in the past.
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='row py-5 d-flex justify-content-center'>
                    <div className='col-11 col-lg-5 my-3 mx-3 shadow p-4 rounded'>
                        <div className='row'>
                            <div className='col-4 d-flex justify-content-center'>
                                <div className={classes.teacher_img}>

                                </div>
                            </div>
                            <div className='col-8 d-flex flex-column justify-content-center'>
                                <h5 className='mb-2'>Ankush Singla</h5>
                                <p>IELTS Instructor</p>
                            </div>
                        </div>
                        <div className='row my-5'>
                            <div className='col-11'>
                            He holds a Bachelor’s degree in Computer Science from George Brown College and a Master’s degree in English from Stanford University. He is an English enthusiast and has worked with bigwigs like Amazon and Facebook in the past.
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-11 col-lg-5 my-3 mx-3 shadow p-4 rounded'>
                        <div className='row'>
                            <div className='col-4 d-flex justify-content-center'>
                                <div className={classes.teacher_img}>

                                </div>
                            </div>
                            <div className='col-8 d-flex flex-column justify-content-center'>
                                <h5 className='mb-2'>Ankush Singla</h5>
                                <p>IELTS Instructor</p>
                            </div>
                        </div>
                        <div className='row my-5'>
                            <div className='col-11'>
                            He holds a Bachelor’s degree in Computer Science from George Brown College and a Master’s degree in English from Stanford University. He is an English enthusiast and has worked with bigwigs like Amazon and Facebook in the past.
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                    
                
            </div>
        </div>
        </>
    )
}
export default AboutUs;