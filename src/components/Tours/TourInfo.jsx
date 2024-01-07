import { useState } from "react";

const TourInfo = ({ text }) => {
  const [readmore, setReadmore] = useState(false);

  return (<div className='info'>
    <p className='description'>
      {readmore ? text : `${text.substring(0, text.length / 2)}...`}
      <span className='btn read-more' onClick={() => setReadmore(!readmore)}>{readmore ? 'show less' : 'show more'}</span>
    </p>
  </div>)
}

export default TourInfo;