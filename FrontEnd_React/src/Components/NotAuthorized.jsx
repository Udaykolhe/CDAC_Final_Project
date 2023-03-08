import React from "react";

function NotAuthorized() {

return(
    <div className="page-wrap d-flex flex-row align-items-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12 text-center box">
                <div className="mb-4 lead">Sorry you are not authorized for the requested page.</div>
                <a href="/" className="btn btn-link">Back to Home</a>
            </div>
        </div>
    </div>
</div>)
}
export default NotAuthorized;