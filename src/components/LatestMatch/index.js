// Write your code here
import './index.css'

const LatestMatch = Props => {
  const {LatestMatchdata} = Props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = LatestMatchdata
  return (
    <div className="LatestMatch-container">
      <div className="LatestMatch-heading">
        <div className="LatestMatch-card">
          <div className="LatestMatch-card-logo-container">
            <div className="LatestMatch-details1">
              <p className="LatestMatch-details-teamname">{competingTeam}</p>
              <p className="LatestMatch-details-date">{date}</p>
              <p className="LatestMatch-details">{venue}</p>
              <p className="LatestMatch-details">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              className="LatestMatch-details-team-logo"
              alt={`LatestMatch ${competingTeam}`}
            />
          </div>
          <hr className="separator" />
          <div className="latest-matchdetails2">
            <p className="LatestMatch-details-label">First Innings</p>
            <p className="LatestMatch-details-value">{firstInnings}</p>
            <p className="LatestMatch-details-label">Second Innings</p>
            <p className="LatestMatch-details-value">{secondInnings}</p>
            <p className="LatestMatch-details-label">Man Of The Match</p>
            <p className="LatestMatch-details-value">{manOfTheMatch}</p>
            <p className="LatestMatch-details-label">&quot;Umpires</p>
            <p className="LatestMatch-details-value">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
