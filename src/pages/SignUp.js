import React, { useEffect, useState } from 'react'
import logo from '../assets/car-white.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../store/actions/actions'

const SignUp = ({ loading, logUp, user }) => {

    useEffect(_ => {
        document.title = `Car Safe - Sign`
    }, [])

    const [fields, setFields] = useState({
        pass: '',
        email: '',
        government: '',
        phone: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        logUp(fields)
    }

    const handleChange = (e) => {
        setFields({
            ...fields,
            [e.target.id]: e.target.value
        })
    }

    return (
        <article className="sign">
            <section className="container" >
                <div className="logo-img">
                    <img className="img-fluid" alt="car" src={logo} />
                </div>
                <div className="sign-text">
                    <h2>Create account to enjoy our services</h2>
                </div>
                <form className="w-100" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input className="form-input"
                            onChange={handleChange} required
                            placeholder="Email" type="email" id="email" />
                    </div>
                    <div className="form-group">
                        <input className="form-input"
                            onChange={handleChange} required minLength="8"
                            placeholder="Password" type="password" id="pass" />
                    </div>
                    <div className="form-group">
                        <input className="form-input"
                            onChange={handleChange} required
                            placeholder="Government" type="text" id="government" />
                    </div>
                    <div className="form-group">
                        <input className="form-input"
                            onChange={handleChange} required minLength="11"
                            placeholder="Phone number" type="number" id="phone" />
                    </div>
                    <div className="form-group">
                        <button type="submit" disabled={loading} className="btn btn-primary btn-block">
                            {loading ? <span className="spinner-border text-light"></span> : 'Create'}
                        </button>
                    </div>
                    <div className="form-group">
                        <div className="divider"></div>
                    </div>
                    <div className="form-group">
                        <Link to="/signin" className="btn btn-danger btn-block">Enter</Link>
                    </div>
                </form>
            </section>
        </article>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logUp: (info) => { dispatch(signUp(info)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
