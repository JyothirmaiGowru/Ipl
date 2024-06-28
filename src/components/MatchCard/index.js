// Write your code here
import './index.css'

const MatchCard = props => {
  const {Matchdetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = Matchdetails
  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchStatusClassName = `match-Status ${getMatchStatusClassName(
    matchStatus,
  )}`
  return (
    <li className="MatchCard-Container">
      <img
        src={competingTeamLogo}
        className="image"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competingTeam-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}> {matchStatus}</p>
    </li>
  )
}
export default MatchCard
