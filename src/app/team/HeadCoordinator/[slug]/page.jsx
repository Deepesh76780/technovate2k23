import PlayerInfo from "../../components/playerInformation"
import { team } from "../../../../styles/data"

export async function generateMetadata({params}){
  const data = team.find(item => item.id === +params.slug)
  return {
    title: data.name,
    description: data.criteria,
    openGraph: {
      image: [{
        url:data.imgUrl,
      }],
    },
  }
}

export default function page({ params }) {
  const data = team.find(item => item.id === +params.slug)

  return (
    <PlayerInfo props={data} />
  )
}
