import React from 'react'
import Logout from '../Logout'

const Header = ({ setIsAdding, setIsAuthticated }) => {
    return (
        <header>
            <h1>Employee Management Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px', marginLeft: '350px' }}>
                <button onClick={() => setIsAdding(true)}>
                    Add Employee
                </button>

                <Logout setIsAuthenticated={setIsAuthticated} />
            </div>
        </header>
    )
}

export default Header