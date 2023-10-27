

export const NavButton = ({ Title, subTitle,bgcolor }) => {

  
  return (
    <button className="btn">
      <div className={`btn__content  font-Orbitron font-extrabold tracking-[0.2rem] ${bgcolor}`}>{Title}</div>
      <span className={`btn__label font-Orbitron ${bgcolor}`}>{subTitle}</span>
    </button>
  );
};

