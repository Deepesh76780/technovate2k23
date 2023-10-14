export const NavButton = ({ Title, subTitle }) => {
  return (
    <button className="btn">
      <div className="btn__content">{Title}</div>
      <span className="btn__label">{subTitle}</span>
    </button>
  );
};
