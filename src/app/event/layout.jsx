import Wrapper from "../components/wrapper";

export const metadata = {
  title:"Event",
}


const eventLinks = [
  { name: "Pronight", href: "/event/pronight" },
  {
    name: "Cultural",
    href: "/event/cultural",
  },
  {
    name: "Technical",
    href: "/event/technical",
  },
  {
    name: "Sports",
    href: "/event/sports",
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
