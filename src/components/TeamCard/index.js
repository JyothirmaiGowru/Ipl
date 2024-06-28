// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamdetails} = props
  const {name, id, teamimageUrl} = teamdetails

  return (
    <li className="team-list">
      <Link to={`/team-matches/${id}`} className="teamcard-list">
        <img src={teamimageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
