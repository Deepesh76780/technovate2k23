import PlayerInfo from "../../components/playerInformation"
import { organizingCommite } from "../../../../styles/data"

export async function generateMetadata({params}){
  const data = organizingCommite.find(item => item.id === +params.slug)
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
  
  const data = organizingCommite.find(item => item.id === +params.slug)


  return (
    <PlayerInfo props={data} />
  )
}
