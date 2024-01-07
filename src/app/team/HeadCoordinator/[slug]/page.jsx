import PlayerInfo from "../../components/playerInformation"
import { team } from "../../../../styles/data"

export default function page({ params }) {
  const data = team.find(item => item.id === +params.slug)

  return (
    <PlayerInfo props={data} />
  )
}
