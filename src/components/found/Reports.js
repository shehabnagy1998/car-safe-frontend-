import React from 'react'
import moment from 'moment';

const Reports = ({ reports, foundDel }) => {
    return (
        <React.Fragment>
            {reports.length >= 1 ? (
                reports.map((report, index) => {
                    return (
                        <div className="col-lg-4" key={index}>
                            <div className="card report">
                                <div className="card-header">
                                    <h4 >{report.brand}</h4>
                                    <button className="btn btn-danger"
                                        onClick={_ => { foundDel(report.reportID) }}>&times;</button>
                                </div>
                                <div className="card-body">
                                    <p className="card-subtitle">Address: {report.address}</p>
                                    <p className="card-subtitle">License plate: {report.lic_pla_num}{report.lic_pla_let}</p>
                                    <p className="card-subtitle">Color: {report.color}</p>
                                </div>
                                <div className="card-footer text-muted">
                                    {moment(report.date).format('DD-MM-YYYY')}
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
