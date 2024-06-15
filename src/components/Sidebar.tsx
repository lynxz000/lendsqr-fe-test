import {BC , dashboard, users, guarantors, loans, handshake, savings, loan_requests, whitelist, karma} from "../assets/index"

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <div className="nav-item">
                    <img src={BC} alt="" />
                    <span>Switch Organization</span>
                </div>
                <div className="nav-item">
                    <img src={dashboard} alt=""/>
                    <span>Dashboard</span>
                </div>
            </div>
            <div className="section">
                <span className="label">CUSTOMERS</span>
                <div className="section-content">
                    <div className="nav-item">
                        <img src={users} alt="" />
                        <span>Users</span>
                    </div>
                    <div className="nav-item">
                        <img src={guarantors} alt="" />
                        <span>Guarantors</span>
                    </div>
                    <div className="nav-item">
                        <img src={loans} alt="" />
                        <span>Loans</span>
                    </div>
                    <div className="nav-item">
                        <img src={handshake} alt="" />
                        <span>Decision Models</span>
                    </div>
                    <div className="nav-item">
                        <img src={savings} alt="" />
                        <span>Savings</span>
                    </div>
                    <div className="nav-item">
                        <img src={loan_requests} alt="" />
                        <span>Loan Requests</span>
                    </div>
                    <div className="nav-item">
                        <img src={whitelist} alt="" />
                        <span>Whitelist</span>
                    </div>
                    <div className="nav-item">
                        <img src={karma} alt="" />
                        <span>Karma</span>
                    </div>
                </div>
            </div>
            <div className="section">
                <span className="label">BUSINESSES</span>
                <div className="section-content">
                    
                </div>
            </div>
        </div>
    )
}

export default SideBar