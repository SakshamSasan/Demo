import { useEffect,useState } from 'react';
import classes from '../../styles/Contact.module.css';
import FAQModal from './FAQModal';

function ContactUs(){

    var canSubmit=false;
    const [modalShow, setModalShow] = useState(false);
    const handleOpen = ()=>setModalShow(true);
    var [title,setTitle] = useState("")
    useEffect(()=>{
        checkForm();
    },[])
    
    function checkForm(){
        'use strict'

        var forms = document.querySelectorAll('.needs-validation')

        Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (!form.checkValidity()) {
            event.stopPropagation()
            canSubmit=false
            }
            else{
                canSubmit=true
            }

            form.classList.add('was-validated')
        }, false)
        })
    }
    function Submit(e) {
        checkForm();
        if(canSubmit){
            
            console.log('entered')
        }
        else{
            console.log('exited')
        }
    }
    const styles={
        color:{
            color:'rgb(74,74,74)'
        }
    }
    return(
        <>
            <FAQModal show={modalShow} onHide={()=>setModalShow(false)} title={title}/>
            <div className='container my-5 py-5'>
                <div className='row d-flex align-items-center justify-content-evenly'>
                    <div className='col-12 mb-5 d-flex justify-content-center'>
                        <h1 style={styles.color}>Frequently asked questions</h1>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4 my-2'>
                        <div onClick={handleOpen} className={`rounded-pill p-4 ${classes.helper}`}>
                            <b>Refund Status</b>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4 my-2'>
                        <div onClick={handleOpen} className={`rounded-pill p-4 ${classes.helper}`}>
                            <b>Payment Methods</b>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4 my-2'>
                        <div onClick={handleOpen} className={`rounded-pill p-4 ${classes.helper}`}>
                            <b>Lifetime Access</b>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4 my-2'>
                        <div onClick={handleOpen} className={`rounded-pill p-4 ${classes.helper}`}>
                            <b>Refund Status</b>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4 my-2'>
                        <div onClick={handleOpen} className={`rounded-pill p-4 ${classes.helper}`}>
                            <b>Payment Methods</b>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4 my-2'>
                        <div onClick={handleOpen} className={`rounded-pill p-4 ${classes.helper}`}>
                            <b>Lifetime Access</b>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4 my-2'>
                        <div onClick={handleOpen} className={`rounded-pill p-4 ${classes.helper}`}>
                            <b>Refund Status</b>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4 my-2'>
                        <div onClick={handleOpen} className={`rounded-pill p-4 ${classes.helper}`}>
                            <b>Payment Methods</b>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4 my-2'>
                        <div onClick={handleOpen} className={`rounded-pill p-4 ${classes.helper}`}>
                            <b>Lifetime Access</b>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container my-5 d-flex flex-column align-items-center'>
                <h1 style={styles.color} className={`${classes.heading}`}>Didn't find the answer ? Message Us</h1>
                <div className={`${classes.form} shadow rounded my-5`}>
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
                            <button type='submit' className='btn btn-success' onClick={Submit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default ContactUs;