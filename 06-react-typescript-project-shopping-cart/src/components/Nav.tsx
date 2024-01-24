type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const button = (
    <button onClick={() => setViewCart((prevState) => !prevState)}>
      {viewCart ? "View Products" : "View Cart"}
    </button>
  );

  const content = <nav className="nav">{button}</nav>;

  return content;
};
export default Nav;
