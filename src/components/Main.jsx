import React from 'react'

function Main() {
  return (
    <>
    <div className="container">
        <div className="my-5">.</div>
        <h1 className="my-4 text-center">Attendace Management System</h1>
        <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {/* Classes */}
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-warning">
                        <div className="card-header py-3 text-bg-warning">
                            <h4 className="my-0 fw-normal">Class</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">0 <small className="text-body-secondary fw-light">Classes</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>5 Days</li>
                                <li>6 Periods</li>
                                <li>10 Teachers</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Students */}
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-danger">
                        <div className="card-header py-3 text-bg-danger">
                            <h4 className="my-0 fw-normal">Student</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">0 <small className="text-body-secondary fw-light">Students</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>0 Male</li>
                                <li>0 Female</li>
                                <li>.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Students */}
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm border-primary">
                        <div className="card-header py-3 text-bg-primary">
                            <h4 className="my-0 fw-normal">Club</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">0 <small className="text-body-secondary fw-light">Clubs</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>0 Events</li>
                                <li>0 National level</li>
                                <li>.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </>
  )
}

export default Main