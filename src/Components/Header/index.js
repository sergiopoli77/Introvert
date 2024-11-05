import Generation from "./Generation";
const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <Generation text="Generation Props" />
    </div>
  );
};
export default Header;
