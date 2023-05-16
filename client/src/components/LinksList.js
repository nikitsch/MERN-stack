import { Link } from "react-router-dom"

export const LinksList = ({ links }) => {
  if (!links.length) {
    return (<p className="center">No Links</p>)
  }

  const sortLinks = links.sort((a, b) => a.clicks < b.clicks ? 1 : -1)

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Original</th>
          <th>Cut</th>
          <th>Click</th>
          <th>Open</th>
        </tr>
      </thead>

      <tbody>
        {sortLinks.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>{link.clicks}</td>
              <td>
                <Link to={`/detail/${link._id}`} >Open</Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}