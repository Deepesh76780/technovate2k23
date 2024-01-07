import Wrapper from "../components/wrapper";

const eventLinks = [
  { name: "Pronight", href: "/event/pronight" },
  {
    name: "Cultural",
    href: "/event/cultural",
    rulebook:
      "https://drive.google.com/file/d/1Kw6ERev_dhrf3K428e8XdbymkNCl9A2b/view?usp=drive_link",
  },
  {
    name: "Technical",
    href: "/event/technical",
    rulebook:
      "https://drive.google.com/file/d/1Se8zZv2aCZOqqW9lQTXXrBmj6-xIWwsO/view?usp=drive_link",
  },
  {
    name: "Sports",
    href: "/event/sports",
    rulebook:
      "https://drive.google.com/file/d/17YTXX80LOdSwAdx6GFeGduTujHWW0Ngo/view?usp=drive_link",
  },
];

export default function EventLayout({ children }) {
  return (
    <Wrapper
      bgImage="/background_images/events2.jpg"
      navColor="bg-[#a85dd1e1]"
      borderColor="border-purple-400"
      paths={eventLinks}
      layout={"border-purple-400 shadow-pink-300 text-purple-300"}
    >
      {children}
    </Wrapper>
  );
}
