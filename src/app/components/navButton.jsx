
export const NavButton = ({ Title, subTitle, bgcolor }) => {
  return (
    <button className="btn lg:w-[145px] w-[90px] lg:text-[0.85rem] text-[0.5rem] lg:h-[45px] h-[35px]">
      <div className={`btn__content  font-cyberway  font-extrabold tracking-[0.3rem] ${bgcolor}`}>{Title}</div>
      <span className={`btn__label font-Orbitron ${bgcolor}`}>{subTitle}</span>
    </button>
  );
};

