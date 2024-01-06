import PlayerInfo from "../../components/playerInformation";
import { team } from "../../../../styles/data";

export default function page({ params }) {
  const data = team.find((item) => item.id === +params.slug);

  if (data && data.id !== 1) {
    data.about = "Student Coordinator";
  }
  return <PlayerInfo props={data} />;
}
