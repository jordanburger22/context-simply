import { Link } from "react-router-dom";



function Navbar() {
    return ( 
        <nav className="navbar">
            <div className="nav-text">
                <h1>Recipe App</h1>
                <p>Your Daily Dose of Delicious Inspiration</p>
            </div>
            <div className="nav-links">
                <Link to='/'><button>Home</button></Link>
                <Link to='/breakfast'><button>Breakfast</button></Link>
                <Link to='/lunch'><button>Lunch</button></Link>
                <Link to='/dinner'><button>Dinner</button></Link>
                <Link to='/dessert'><button>Dessert</button></Link>
            </div>
        </nav>
     );
}

export default Navbar;