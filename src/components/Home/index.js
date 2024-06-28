// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {teamsdata: [], isloading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch(teamsApiUrl)
    const data = await response.json()
    const updateddata = data.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamimageUrl: team.teamimage_url,
    }))
    this.setState({teamsdata: updateddata, isloading: false})
  }

  renderdataList = () => {
    const {teamsdata} = this.state
    return (
      <ul className="team-list">
        {teamsdata.map(team => (
          <TeamCard teamdetails={team} key={team.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div className="loader-container">
      <Loader type="Oval" color="#ffffff" height={60} />
    </div>
  )

  render() {
    const {isloading} = this.state
    return (
      <div className="main-container">
        <div className="main-container-list">
          <div className="ipldashboard-Contauner">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="logo"
              alt="ipl-logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
            {isloading ? this.renderLoader() : this.renderdataList()}
          </div>
        </div>
      </div>
    )
  }
}
export default Home
