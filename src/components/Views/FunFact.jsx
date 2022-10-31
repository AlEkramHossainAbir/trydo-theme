import React from "react"
const FunFact = () =>{
    return(
      <div className="fun-fact-container">
        
        <div className="fun-fact">
        <h1 className="fun-fact-text">Our Fun Facts</h1>
        <div className="fun-fact-count-container">
          <div className="fun-fact-card">
            <h1 className="number-text">
              199<span className="temp-position">+</span>
            </h1>
            <p className="text-secondary">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
          <div className="fun-fact-card">
            <h1 className="number-text">
              575<span className="temp-position">+</span>
            </h1>
            <p className="text-secondary">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
          <div className="fun-fact-card">
            <h1 className="number-text">
              69<span className="temp-position">+</span>
            </h1>
            <p className="text-secondary">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those.
            </p>
          </div>
        </div>
      </div>
      </div>
    )
}
export default FunFact