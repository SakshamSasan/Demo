import classes from '../../styles/Queue.module.css'
import QueueComponent from './QueueComponent';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { Fade } from "react-awesome-reveal";
function Queue(){
    
    var array=[1,2,3,4,5,6]
    function slideLeft(){
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft-600

    }

    function slideRight(){
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft+600

    }

    return(
        <div className={`container ${classes.my_high}`} style={{color:'black'}}>
            <div className='row'>
                
                <div className='col-12 d-flex flex-column align-items-center'>
                    <Fade direction='up' triggerOnce>
                    <h2 className='my-5'>Popular Teachers</h2>
                    </Fade>
                    <div className='row d-flex justify-content-center'>
                        
                        <div className={`col-8 col-lg-10`} style={{position:'relative'}}>
                        <MdChevronLeft className={classes.sliderIconsLeft} size={40} onClick={slideLeft}/>
                            <div id='slider' className={`w-100 ${classes.queue_container}`}>
                                {array.map(item=>
                                    <QueueComponent />
                                )}
                            </div>
                            
                            <MdChevronRight className={classes.sliderIconsRight} size={40} onClick={slideRight} />
                        </div>
                        
             
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Queue;