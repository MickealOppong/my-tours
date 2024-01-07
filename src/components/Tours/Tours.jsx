import { toursList } from '../../data';
import Tour from './Tour';
const Tours = () => {


  return <section className="tours" id="tours">
    <Tour data={toursList} />
  </section >
}
export default Tours;