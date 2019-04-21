import React from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import logo from '../../assets/car-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import * as $ from 'jquery'
import 'bootstrap'
import { signOut } from '../../store/actions/actions'

const Navbar = ({ location, logOut, user }) => {

    const isShown = location.pathname !== '/signin' && location.pathname !== '/signup' ? true : false;
    console.log(user)

    return (
        <nav className={`navbar bg-primary navbar-expand-md ${isShown ? '' : 'd-none'}`}>
            <Link to="/" className="navbar-brand">
                <img src={logo} className="img-fluid" alt="car" />
            </Link>
            <button className="navbar-toggler text-light" data-toggle="collapse" data-target="#nav-menu">
                <FontAwesomeIcon icon={faBars} />
            </button>

            <section className="collapse navbar-collapse" id="nav-menu">
                <ul className="navbar-nav">
                    {!$.isEmptyObject(user) && <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle" data-toggle="dropdown" >
                            {user.email}
                        </button>

                        <section className="dropdown-menu">
                            <div className="dropdown-item">
                                <button className="btn btn-primary btn-block"
                                    onClick={_ => { logOut() }}>Sign Out</button>
                            </div>
                        </section>
                    </li>}
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/lost" >Lost</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/found" >Found</NavLink>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => { dispatch(signOut()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))
