import { Outlet, Link } from 'react-router-dom'
import './App.css'

export default function Layout() {
    return (
        <div className="app">
            <header className="header">
                <div className="header-content">
                    <h1 className="logo">Tiffany's Kitchen</h1>
                    <p className="tagline">Simple food, beautiful moments. Made fresh daily!</p>

                    <nav className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>

                    </nav>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer className="footer">
                <p>23 Bennett Street, Connecticut, OH</p> 
                <p>Call: +1 (555) 123-4567</p>
                <p>Open daily: 8:00 AM - 10:00 PM</p>
            </footer>
        </div>
    )
}


