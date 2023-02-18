import Modal from 'react-bootstrap/Modal';
import classes from '../styles/Navbar.module.css';
import {useState,useEffect} from 'react';
import Select from "react-select";
import ReCAPTCHA from 'react-google-recaptcha'
function SignUp(props){

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: 'english', label: 'English' },
        { value: 'hindi', label: 'Hindi' },
        { value: 'chinese', label: 'Chinese' },
        { value: 'russian', label: 'Russian' },
        { value: 'spanish', label: 'Spanish' },
        { value: 'arabic', label: 'Arabic' }
      ];
      
    useEffect(() => {
        fetch(
          "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
          .then((response) => response.json())
          .then((data) => {
            setCountries(data.countries);
            setSelectedCountry(data.userSelectValue);
          });
        
      }, []);
      function onChange(value) {
        console.log("Captcha value:", value);
      }
    return(
        <>
            <Modal {...props} centered>
                <Modal.Header closeButton className='border-0'>
                <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body className='py-1'>
                <form className='needs-validation w-100 px-2' noValidate method='POST' action=''>
                        <div className='my-2'>
                            <label for="nameInput" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="nameInput" placeholder="Ram Mohan" required />
                        </div>
                        <div className='my-2'>
                            <label for="emailInput" className="form-label">Email</label>
                            <input type="email" className="form-control" id="emailInput" placeholder="abc@exmaple.com" required />
                        </div>
                        <div>
                            <label for="pwdInput" className="form-label">Password</label>
                            <input type="password" className="form-control" id="pwdInput" required />
                        </div>
                        <div>
                            <label for="cpwdInput" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="cpwdInput" required />
                        </div>

                        <div className='my-3'>
                            <label for='country'>Select Country:</label>
                            <Select
                                id='country'
                                options={countries}
                                value={selectedCountry}
                                onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                            />
                        </div>

                        <div className='my-3'>
                            <label for='language'>Select Native Language:</label>
                            <Select 
                                id='language'
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                            />

                        </div>
                        <div className='my-3'>
                            <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} onChange={onChange}/>
                        </div>
                        <div className='my-4'>
                            <button type='submit' className={`w-100 btn rounded-pill ${classes.submit}`}>Register</button>
                        </div>

                        <div className='my-2 d-flex justify-content-center align-items-center'>
                            <div className={`${classes.line} mx-1`}></div>
                            <div>OR</div>
                            <div className={`${classes.line} mx-1`}></div>
                        </div>
                    </form>

                    <div className='w-100 d-flex justify-content-center my-2' >
                        <div className={`rounded-pill border my-3 m-auto ${classes.googlepill}`}>
                        <div className={classes.iconGoogle}></div>Sign Up with Google</div>
                    </div>
                    <div className='w-100 d-flex justify-content-center' >
                        <div className={`rounded-pill border my-3 m-auto ${classes.fbpill}`}>
                        <div className={classes.iconFacebook}></div>Sign Up with Facebook</div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='border-0'>
                
                </Modal.Footer>
            </Modal>

        </>
    )
}
export default SignUp;