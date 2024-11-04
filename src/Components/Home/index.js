import CardInfo from "./CardInfo";
import Search from "./Search";
const Home = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <CardInfo text="CardInfo Props" />
      <Search text="Search Props" />
    </div>
  );
};
export default Home;
