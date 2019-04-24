import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux'
import Reports from '../components/lost/Reports'
import { deleteLost, loadLost } from '../store/actions/actions'
import { Link } from 'react-router-dom'

const Lost = ({ lostLoad, lostRep, lostDel }) => {

    useEffect(_ => {
        document.title = `Car Safe - Lost`;
        lostLoad()
    }, []);



    return (
        <article className="lost">
            <section className="container">
                <h2 className="title"><span>lost</span> car reports</h2>

                <div className="row reports">
                    <div className="col-lg-4">
                        <div className="card report">
                            <div className="card-body add">
                                <h3>Add Report</h3>
                                <Link to="/lost/add" className="btn btn-primary">
                                    <FontAwesomeIcon icon={faPlus} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Reports reports={lostRep} lostDel={lostDel} />
                </div>

            </section>
        </article>
    )
}

const mapStateToProps = (state) => {
    return {
        lostRep: state.lost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        lostDel: (id) => { dispatch(deleteLost(id)) },
        lostLoad: () => { dispatch(loadLost()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lost)
