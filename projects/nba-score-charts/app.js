const gamesData = [
  {
    awayTeam: {
      teamName: 'Warriors',
      teamPoints: 119,
      isWinner: true,
    },
    homeTeam: {
      teamName: 'Houston',
      teamPoints: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      teamName: 'Warriors',
      teamPoints: 105,
      isWinner: false,
    },
    homeTeam: {
      teamName: 'Houston',
      teamPoints: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      teamName: 'Warriors',
      teamPoints: 126,
      isWinner: true,
    },
    awayTeam: {
      teamName: 'Houston',
      teamPoints: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      teamName: 'Warriors',
      teamPoints: 92,
      isWinner: false,
    },
    awayTeam: {
      teamName: 'Houston',
      teamPoints: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      teamName: 'Warriors',
      teamPoints: 94,
      isWinner: false,
    },
    homeTeam: {
      teamName: 'Houston',
      teamPoints: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      teamName: 'Warriors',
      teamPoints: 115,
      isWinner: true,
    },
    awayTeam: {
      teamName: 'Houston',
      teamPoints: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      teamName: 'Warriors',
      teamPoints: 101,
      isWinner: true,
    },
    homeTeam: {
      teamName: 'Houston',
      teamPoints: 92,
      isWinner: false,
    },
  },
]

// ************************************************************************************

const makeChart = (games, queriedTeamName) => {
  const ulParent = document.createElement('ul')
  for (let game of games) {
    const gameLi = document.createElement('li')
    gameLi.innerHTML = getScoreLine(game)
    const gameStatus = isTargetTeamWinner(game, queriedTeamName) ? 'win' : 'loss'
    gameLi.classList.add(gameStatus) // add game status as class to list item
    ulParent.appendChild(gameLi)
  }
  return ulParent
}

// we descructure/unpack the game object in the params instead of
// doing it on a separate line like this: `const { homeTeam, awayTeam } = game`
const getScoreLine = ({ homeTeam, awayTeam }) => {
  // destructure homeTeam and awayTeam variables
  const { teamName: homeTeamName, teamPoints: homeTeamPoints } = homeTeam
  const { teamName: awayTeamName, teamPoints: awayTeamPoints } = awayTeam
  const teamNames = `${awayTeamName} @ ${homeTeamName}`
  let scoreLine
  if (awayTeamPoints > homeTeamPoints) {
    scoreLine = `<b>${awayTeamPoints}</b>-${homeTeamPoints}`
  } else {
    scoreLine = `${awayTeamPoints}-<b>${homeTeamPoints}</b>`
  }
  return `${teamNames} ${scoreLine}`
}

const isTargetTeamWinner = ({ homeTeam, awayTeam }, queriedTeamName) => { // game object is unpacked again
  // the color palette (green/red) of the table is evaluated from a certain team (queried team) perspective
  const queriedTeam = homeTeam.teamName === queriedTeamName ? homeTeam : awayTeam
  return queriedTeam.isWinner
}

const warriorsSection = document.querySelector('#warriors')
const houstonSection = document.querySelector('#houston')

const warriorsChart = makeChart(gamesData, 'Warriors')
warriorsSection.appendChild(warriorsChart)

const houstonChart = makeChart(gamesData, 'Houston')
houstonSection.appendChild(houstonChart)