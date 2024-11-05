import Evoluation from "./Evoluation";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo"
const CardInfo = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Evoluation text="GrivinEvo - using props" />
      <TypeEffect text="GrivinType - using props" />
      <Logo text="JonaldType - using props" />
    </div>
  );
};
export default CardInfo;
