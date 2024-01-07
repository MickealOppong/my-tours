//import img from '../../assets/bali.webp';

const TourImage = ({ img }) => {
  return (
    <div className="img-container">
      <img src={img} alt={img} className='img' />
    </div>
  )
}

export default TourImage;