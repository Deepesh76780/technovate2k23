import Wrapper from "../components/wrapper";

const teamLinks = [
  { name: "Level 1", href: "/schedule/day1" },
  { name: "Level 2", href: "/schedule/day2" },
  { name: "Level 3", href: "/schedule/day3" },
];

export default function TeamLayout({ children }) {
  return (
    <Wrapper
      bgImage="/background_images/schedule.jpg"
      resNavColor="#dba240"
      navColor="bg-[#dba240]"
      borderColor="border-yellow-600"
      paths={teamLinks}
      layout={"border-amber-600 shadow-amber-300 text-amber-300"}
      flexClass={"lg:gap-7"}
    >
      {children}
    </Wrapper>
  );
}
