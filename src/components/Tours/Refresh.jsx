const Refresh = ({ event }) => {

  return <div className="refresh-container">
    <h1>no tours left</h1>
    <button className="btn btn-refresh" onClick={event}>refresh</button>
  </div>
}

export default Refresh;