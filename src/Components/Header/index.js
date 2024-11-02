import Generation from "./Generation";
const Header = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Generation text="Generation Props" />
    </div>
  );
};
export default Header;
