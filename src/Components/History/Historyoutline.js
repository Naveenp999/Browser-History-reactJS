import './Historyoutline.css'
import {Component} from 'react'
import HistoryItem from '../HistoryItem/HistoryItem'

class Historyoutline extends Component {
  state = {search: '', modifiedHistory: this.props.InitialHistoryList}

  makesearchchange = event => {
    const {search} = this.state
    const {InitialHistoryList} = this.props
    const intermediateHistory = InitialHistoryList.filter(element =>
      element.title.toUpperCase().includes(search.toUpperCase()),
    )
    this.setState({
      search: event.target.value,
      modifiedHistory: intermediateHistory,
    })
  }

  makelistchange = name => {
    const {modifiedHistory} = this.state
    const intermediateHistory = modifiedHistory.filter(
      element => element.title !== name,
    )
    this.setState({modifiedHistory: intermediateHistory})
  }

  render() {
    const {search, modifiedHistory} = this.state
    console.log()
    return (
      <div className="container">
        <nav className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="search-bag">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              className="search-input"
              type="search"
              placeholder="Search History"
              onChange={this.makesearchchange}
              value={search}
            />
          </div>
        </nav>
        <div className="sub">
          {modifiedHistory.length > 0 && (
            <ul className="items-container">
              {modifiedHistory.map(element => (
                <HistoryItem
                  item={element}
                  key={element.id}
                  changes={this.makelistchange}
                />
              ))}
            </ul>
          )}

          {modifiedHistory.length === 0 && (
            <div className="nolistitems">
              <p className="description">There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Historyoutline
