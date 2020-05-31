import React from 'react';
import {useHistory} from 'react-router-dom'

const Logout = () => {
    const history = useHistory();
    function clearToken() {
        localStorage.clear();
        history.push('/')
    }
    return (
        <div>
            <button onClick={clearToken}>Logout</button>
        </div>
    )
}

export default Logout; 