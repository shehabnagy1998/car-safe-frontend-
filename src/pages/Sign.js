import React, { useEffect, useState } from 'react'
import logo from '../assets/car-white.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../store/actions/actions'

const Sign = ({ logIn, loading, user }) => {
    console.log(user)

    useEffect(_ => {
        document.title = `Car Safe - Sign`
    }, []);

    const [fields, setFields] = useState({
        email: '',
        pass: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fields);
        logIn(fields)
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
                    <h2>sign in to get started</h2>
                </div>
                <form className="w-100" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input className="form-input"
                            placeholder="Email"
                            onChange={handleChange}
                            type="email" id="email" required />
                    </div>
                    <div className="form-group text-center">
                        <input className="form-input"
                            placeholder="Password"
                            minLength="8"
                            onChange={handleChange}
                            type="password" id="pass" required />
                    </div>
                    <div className="form-group">
                        <button type="submit" disabled={loading} className="btn btn-primary btn-block">
                            {loading ? <span className="spinner-border text-light"></span> : 'Enter'}
                        </button>
                    </div>
                    <div className="form-group">
                        <div className="divider"></div>
                    </div>
                    <div className="form-group">
                        <Link to="/signup" className="btn btn-danger btn-block">Create Account</Link>
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
        logIn: (info) => { dispatch(signIn(info)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sign)
