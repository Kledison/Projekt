import React from 'react'
import img1 from './images/pedro.jpg'
import Rule2 from './Rule2'
import Rule3 from './Rule3'
const Imazh = () => {
    let gjeresi = "50%"
  return (
    <div>
        {/* Cdo variabel, funksion apo instruksione  therritet me ane te {}, ndryshe expression */}
  <img src={img1} alt="..." width={gjeresi} height={gjeresi} />
  <p>{1+3}</p>
  <p>{10%2 === 0 ? "10 Eshte cift" : "10 eshte tek"}</p>
  <p>{10%2 === 0 ?<Rule2 /> : <Rule3 /> }</p>

  </div>
  )
}

export default Imazh

