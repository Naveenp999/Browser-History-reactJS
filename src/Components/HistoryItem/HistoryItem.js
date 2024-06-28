import './HistoryItem.css'

const HistoryItem = props => {
  const {item, changes} = props
  console.log(changes)
  const {timeAccessed, logoUrl, title, domainUrl} = item

  const makechanges = () => changes(title)

  return (
    <li className="list-con">
      <p className="time">{timeAccessed}</p>
      <div className="data-bag">
        <div className="sub-container">
          <img src={logoUrl} alt="domain logo" className="web-logo" />
          <div className="name-url">
            <p className="app-name" id="app-names">
              {title}
            </p>
            <p className="app-url">{domainUrl}</p>
          </div>
        </div>
        <button className="button" onClick={makechanges} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="app-delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
