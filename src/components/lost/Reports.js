import React from 'react'
import moment from 'moment';

const Reports = ({ reports, lostDel }) => {
    return (
        <React.Fragment>
            {reports.length >= 1 ? (
                reports.map((report, index) => {
                    return (
                        <div className="col-lg-4" key={report.reportID}>
                            <div className="card report">
                                <div className={`card-header ${report.isMatch ? 'bg-primary' : ''}`}>
                                    <h4 >{report.brand}</h4>
                                    <button className="btn btn-danger"
                                        onClick={_ => { lostDel(report.reportID) }}>&times;</button>
                                </div>
                                <div className="card-body">
                                    <p className="card-subtitle">Phone: {report.phone}</p>
                                    <p className="card-subtitle">
                                        License plate: {report.lic_pla_num}{report.lic_pla_let}
                                    </p>
                                    <p className="card-subtitle">Engine #: {report.engine_no}</p>
                                    <p className="card-subtitle">Vin #: {report.vin_no}</p>
                                    <p className="card-subtitle">Color: {report.color}</p>
                                    {report.isMatch && <p className="card-subtitle text-center">
                                        your car has been found contact with this phone {report.founderPhone}
                                    </p>}
                                </div>
                                <div className="card-footer text-muted">
                                    {moment(report.date).format('DD-MM-YYYY ')}
                                </div>
                            </div>
                        </div>
                    )
                })
            ) : (
                    <div className="col-lg-4">
                        <h3 className="no-report">no reports</h3>
                    </div>
                )}
        </React.Fragment>
    )
}

export default Reports
