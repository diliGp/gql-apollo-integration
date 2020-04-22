import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/books">Books</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        </header>
    )
}

export default Header
