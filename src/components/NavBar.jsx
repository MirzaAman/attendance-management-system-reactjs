import React from 'react'

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">Attender</a>
                    <button className="navbar-toggler" type='button'
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className="navbar-toggle-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"> <a href="" className="nav-link active" aria-current="page"> Home </a></li>
                            <li className="nav-item dropdown"> <a href="#" className="nav-link dropdown-toggle" role='button' data-bs-toggle="dropdown" aria-expanded='false'>Classes</a>
                                <ul className="dropdown-menu" style={{maxHeight:'400px',overflowY:'auto'}}>
                                    <li><a className="dropdown-item">Class 1</a></li>
                                    <li><a className="dropdown-item">Class 2</a></li>
                                    <li><a className="dropdown-item">Class 3</a></li>
                                    <li><a className="dropdown-item">Class 4</a></li>
                                    <li><hr className="dropdown-item" /></li>
                                    <li><a className="dropdown-item" style={{cursor:'pointer'}} >Add Class</a></li>
                                </ul>
                            </li>
                            <div className="btn btn-warning" type="button" >Add Class</div>
                        </ul>

                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" role='button' data-bs-toggle='dropdown' aria-expanded="false">Teachers</a>
                                <ul className="dropdown-menu" style={{maxHeight:'400px',overflowY:'auto'}}>
                                    <li><a href="" className="dropdown-tem">Teacher 1</a></li>
                                    <li><a href="" className="dropdown-tem">Teacher 1</a></li>
                                    <li><a href="" className="dropdown-tem">Teacher 1</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a href="" className="dropdown-tem" style={{cursor:'pointer'}}>Teacher 1</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role='search' >
                            <div className="dropdown px-5">
                                <a href="" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="profile.png" alt="#profile" className="rounded-circle" height="32" width="32" />
                                </a>
                                <ul className="dropdown-menu text-small">
                                    <li><a href="" className="dropdown-item">Hi User</a></li>
                                    <li><a href="" className="dropdown-item" style={{cursor:'pointer'}} >Add Plan</a></li>
                                    <li><a href="" className="dropdown-item" style={{cursor:'pointer'}} >Club</a></li>
                                    <li><a href="" className="dropdown-item" style={{cursor:'pointer'}} >My Duty</a></li>
                                    <li><a href="" className="dropdown-item" style={{cursor:'pointer'}} >Profile</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a href="" className="dropdown-item" style={{cursor:'pointer'}} >Sign Out</a></li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar