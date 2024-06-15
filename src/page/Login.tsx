import MyLogo from "../assets/Group.svg";
import MySVG from "../assets/illustration.svg";
import '../styles/Login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dash')
    }
    return (
     <div className='main'>
        <div className='bg'>
        <div className='illus'>  
          <img src={MySVG} alt="" />
        </div>
        </div>
        <div className='form'>
            <div className='content'>
                <div className='logo'>
                <img src={MyLogo} alt="" />
                </div>
                <span className='welcome'>Welcome!</span>
                <span className='details'>Enter details to login.</span>
                <div className='text-field'>
                <input type="text" placeholder='email' className='field'/>
                <input type="text" placeholder='password' className='field'/>
                <a href="forgot.html" className="link">FORGOT PASSWORD</a>
                </div>
                <button className='lg-button' onClick={handleClick}>LOG IN</button>
            </div>
        </div>
    </div>
    )
}

export default Login;
