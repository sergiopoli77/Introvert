import CardInfo from "./CardInfo";
const Home = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <CardInfo text="CardInfo Props" />
    </div>
  );
};
export default Home;
