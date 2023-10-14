export const NavButton = ({ Title, subTitle }) => {
  return (
    <button className="btn ">
      <div className="btn__content  font-Orbitron font-bold tracking-[0.2rem]">{Title}</div>
      <span className="btn__label font-Orbitron">{subTitle}</span>
    </button>
  );
};

