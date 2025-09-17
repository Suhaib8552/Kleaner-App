import React from 'react'

function Filter({ cardSelected, setCardSelected }) {
  return (
    <div className='mb-0'>
      <ul
        style={{ background: "#1d2026" }}
        className='d-flex align-items-center justify-content-center flex-wrap mt-5 py-5 gap-5 h-100 w-100 mb-1'
      >
        <li style={{ overflow: "hidden" }}>
          <button
            className='btn btn-dark fw-bold'
            style={cardSelected === "founder" ? { background: "cadetblue" } : {border:"1px solid #fff"}}
            onClick={() => setCardSelected("founder")}
          >
            Founder
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            className='btn btn-dark fw-bold'
            style={cardSelected === "contract-cleaner" ? { background: "cadetblue" } : {border:"1px solid #fff"}}
            onClick={() => setCardSelected("contract-cleaner")}
          >
            Contract Cleaners
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            className='btn btn-dark fw-bold'
            style={cardSelected === "industrial-cleaner" ? { background: "cadetblue" } : {border:"1px solid #fff"}}
            onClick={() => setCardSelected("industrial-cleaner")}
          >
            Industrial Cleaners
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            className='btn btn-dark fw-bold'
            style={cardSelected === "office-manager" ? { background: "cadetblue" } : {border:"1px solid #fff"}}
            onClick={() => setCardSelected("office-manager")}
          >
            Office Managers
          </button>
        </li>
        <li style={{ overflow: "hidden" }}>
          <button
            className='btn btn-dark fw-bold'
            style={cardSelected === "" ? { background: "cadetblue" } : {border:"1px solid #fff"}}
            onClick={() => setCardSelected("")}
          >
            Show All
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Filter