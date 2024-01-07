
import { useState } from "react";
//import { toursList } from '../../data';
import Refresh from "./Refresh";
import TourBtn from "./TourBtn";
import TourImage from "./TourImage";
import TourInfo from "./TourInfo";
import TourPrice from "./TourPrice";
import TourTitle from "./TourTitle";


const Tour = ({ data }) => {
  const [tours, SetTours] = useState(data)
  const [isEmpty, SetIsEmpty] = useState(false)

  const clearItem = (id) => {
    const filteredTours = tours.filter((tour) => tour.id !== id)
    SetTours(filteredTours);
    if (filteredTours.length === 0) {
      SetIsEmpty(true)
    }
  }

  const handleClick = () => {
    SetIsEmpty(false);
    SetTours(data);
  }

  if (isEmpty) {
    return <Refresh event={handleClick} />
  }
  return (
    <>
      {
        tours.map((tour) => {
          const { id, img, title, price, text } = tour;
          return <article className="tour" key={id}>
            <TourImage img={img} />
            <TourTitle title={title} />
            <TourInfo text={text} />
            <TourPrice price={price} />
            <TourBtn onClick={() => clearItem(id)} />
          </article>
        })
      }
    </>
  )

}

export default Tour;