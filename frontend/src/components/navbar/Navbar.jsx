import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="left-navbar">
                    <p className="heading">HDS</p>
                </div>
                <div className="mid-navbar">
                    <input type="text" placeholder="Search or DD-MM-YYYY" />
                    <button>Search</button>
                </div>
                <div className="right-navbar">
                    <button>Sign up</button>
                    <button>Login</button>
                </div>
            </div>
            <div className="hline"></div>
        </>
    )
}
export default Navbar