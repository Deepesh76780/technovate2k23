import Wrapper from "../components/wrapper";
const sponsershipLinks = [
  { name: 'Sponser', href: '/sponsers/overall_sponser' },
  { name: 'Event Sponser', href: '/sponsers/event_sponser' },
];

export default function SponserLayout({ children }) {
  return (
    <Wrapper
      bgImage="/background_images/sponsers1.webp"
      resNavColor="#40dbb2"
      navColor="bg-[#40dbb2]"
      borderColor="border-emerald-400"
      paths={sponsershipLinks}
      layout={"border-emerald-400 shadow-emerald-300 text-emerald-200"}
    >
      {children}
    </Wrapper>
  );
}
