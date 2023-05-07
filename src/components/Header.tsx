import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

const Header: React.FC = () => {
    return (
        <React.Fragment>
            <Navbar bg="light" variant="light">
                <div className='w-100 d-flex p-1'>
                    <Navbar.Brand className='p-1 w-50 d-flex d-flex justify-content-start' href="#home">Word Count</Navbar.Brand>
                </div>
            </Navbar>
        </React.Fragment>
    )
}

export default Header