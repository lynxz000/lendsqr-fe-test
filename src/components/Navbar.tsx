import MyLogo from "../assets/Group.svg"

const Navbar = () => {
    return (
        <div>
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

        </div>
    )
}
export default Navbar