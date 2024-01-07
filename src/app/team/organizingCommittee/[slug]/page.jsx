import PlayerInfo from "../../components/playerInformation"
import { organizingCommite } from "../../../../styles/data"

export default function page({ params }) {


  const data = organizingCommite.find(item => item.id === +params.slug)

  return (
    <PlayerInfo props={data} />
  )
}
