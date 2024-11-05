import CardInfo from "./CardInfo";
import Search from "./Search";
const Home = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <CardInfo text="CardInfo Props" />
      <Search text="Search Props" />
    </div>
  );
};
export default Home;
