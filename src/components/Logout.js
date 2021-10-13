import React from 'react'

const Logout = () => {

    const logOut=() => {
        localStorage.removeItem("token")
        window.location.href='/login'
    }
    return (
        <div>
            <button className='log-out' onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Logout
