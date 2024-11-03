import Evoluation from "./Evoluation";
import TypeEffect from "./TypeEffect";
const CardInfo = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Evoluation text="GrivinEvo - using props" />
      <TypeEffect text="GrivinType - using props" />
    </div>
  );
};
export default CardInfo;
