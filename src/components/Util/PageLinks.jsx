import { links } from '../../data.js';
const PageLinks = ({ mainClass }) => {
  return (
    <div className={mainClass}>
      <ul>
        {
          links.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}><a href={href}>{text}</a></li>
            )
          })
        }
      </ul>
    </div >
  )
}

export default PageLinks;