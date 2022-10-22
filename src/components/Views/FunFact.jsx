import React from "react"
const FunFact = () =>{
    return(
        <div className="fun-fact">
        <h1 className="fun-fact-text">Our Fun Facts</h1>
        <div className="row  text-center pb-5 container mx-auto">
          <div className="col-lg-4 col-md-6 col-sm-4 pb-4">
            <h1 className="text-danger fw-bold pb-3">
              199<span className="temp-position">+</span>
            </h1>
            <p className="text-secondary h5">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-4 pb-4">
            <h1 className="text-danger pb-3 fw-bold">
              575<span className="temp-position">+</span>
            </h1>
            <p className="text-secondary h5">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-4 pb-4">
            <h1 className="text-danger pb-3 fw-bold">
              69<span className="temp-position">+</span>
            </h1>
            <p className="text-secondary h5">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
        </div>
      </div>
    )
}
export default FunFact