import classes from '../../styles/QueueComponent.module.css'
import {Link} from 'react-router-dom';
function QueueComponent(){
    var array=[1,2,3,4,5]
    
    return(
        <div className={`${classes.w_25} d-flex flex-column mx-4`}>
            <Link to='/Demo/teacher' className={classes.decor}>
            <div className={`${classes.img} rounded`}>

            </div>
            <div className={`my-1`}>
                <b>IELTS Full Course</b>
            </div>
            <div className={classes.courseinstructor}>
                <b>John Doe</b>
            </div>
            <div className={classes.rating}>
                <b>4.3 &nbsp;</b>
                {array.map(item=>
                    <i style={{color:'rgb(218,154,60)'}}className='fa-solid fa-star mx-1'></i>)}
            </div>
            <div>
                <b>CA$ 79.00</b>
            </div></Link>
            
        </div>
    )
}

export default QueueComponent;