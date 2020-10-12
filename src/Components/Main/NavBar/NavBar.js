import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">E-commerce Site</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={() => alert('This section will be activated at next update')}>Features</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={() => alert('This section will be activated at next update')}>Components</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link disabled" href="#" onClick={() => alert('This section will be activated at next update')}>Accessories</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;