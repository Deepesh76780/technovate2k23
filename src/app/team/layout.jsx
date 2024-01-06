import Wrapper from "../components/wrapper";

const teamLinks = [
  { name: "Team Heads", href: "/team/HeadCoordinator" },
  { name: "Volunteer", href: "/team/volunteer" },
];

export default function TeamLayout({ children }) {
  return (
    <Wrapper
      bgImage="/background_images/teams.jpg"
      resNavColor="#40d0db"
      navColor="bg-[#40d0db]"
      borderColor="border-cyan-400"
      paths={teamLinks}
      layout={"text-cyan-100 border-cyan-400 shadow-cyan-300"}
      flexClass={"lg:gap-7"}
    >
      {children}
    </Wrapper>
  );
}
