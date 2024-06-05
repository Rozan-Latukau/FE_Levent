import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

const Navbar = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/categories'>Categories</Link>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar;