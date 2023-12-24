import Wrapper from "../components/wrapper";

const teamLinks = [
  { name: 'Outlook', href: '/team/outlook' },
  { name: 'Head', href: '/team/HeadCoordinator' },
  { name: 'Sponsership', href: '/team/sponsership' },
  { name: 'Marketing', href: '/team/marketing' },
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
    >
      {children}
    </Wrapper>
  );
}
