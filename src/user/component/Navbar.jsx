import { Link } from "react-router-dom"



function Navbar(){
    return(
        <>
       <nav className="bg-white border-b shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex items-center">
                    <img src='src/assets/logo.png' alt="Logo" className="h-20 mr-10" />
                    <ul className="flex space-x-20 ml-20">
                        <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
                        <li><Link to="/shop" className="text-gray-700 hover:text-blue-600">Shop</Link></li>
                        <li><Link to="/service" className="text-gray-700 hover:text-blue-600">Service</Link></li>
                        <li><Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border rounded-lg py-1 px-3 mr-4"
                    />
                    <Link to="/cart">
                        <img src='src/assets/cart.svg' alt="Cart" className="h-6" />
                    </Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar