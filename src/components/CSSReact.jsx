import React from 'react'
import "./css/style.css"

const CSSReact = () => {
    let stylesheet= {
        fontStyle: "italic",
        color: "#00ff00"
    }
  return (
    <div>
        <h1 style={{color:"#ff0000", fontSize:"200px"}}>CSS Inline</h1>
        <h2 style={stylesheet}>CSS Internal</h2>
        <h3 className="titul">CSS External</h3>
    </div>
  )
}

export default CSSReact