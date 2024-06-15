
import MyLogo from "../assets/Group.svg";


const Dash = () => {
    console.log('what is going on');
    return (
        <div className='dashboard'>
            <nav>
                <div className='left'>
                    <div className='logo2'>
                    <img src={MyLogo} alt="" />
                    </div> 
                    <input type="text" className='search' />
                </div>
                <div>
                    <a href="docs.html" className='docs'>Docs</a>

                </div>
            </nav>
            <div className='sidebar'>
                
            </div>
        </div>
    )
}

export default Dash;

 