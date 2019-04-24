import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
import Reports from '../components/found/Reports'
import { deleteFound, loadFound } from '../store/actions/actions'
import { Link } from 'react-router-dom';

const Lost = ({ foundLoad, foundRep, foundDel }) => {

    useEffect(_ => {
        document.title = `Car Safe - Found`;
        foundLoad()
    }, []);



    return (
        <article className="found">
            <section className="container">
                <h2 className="title"><span>found</span> car reports</h2>

                <div className="row reports">
                    <div className="col-lg-4">
                        <div className="card report">
                            <div className="card-body add">
                                <h3>Add Report</h3>
                                <Link to="/found/add" className="btn btn-primary">
                                    <FontAwesomeIcon icon={faPlus} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Reports reports={foundRep} foundDel={foundDel} />
                </div>

            </section>
        </article>
    )
}

const mapStateToProps = (state) => {
    return {
        foundRep: state.found
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        foundDel: (id) => { dispatch(deleteFound(id)) },
        foundLoad: () => { dispatch(loadFound()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lost)
