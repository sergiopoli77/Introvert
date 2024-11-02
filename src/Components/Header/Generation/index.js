import Gen1 from "./Gen 1";
import Gen2 from "./Gen 2";
const Generation = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Gen1 text="SergioGen1 - using props" />
      <Gen2 text="SergioGen1 - using props" />
    </div>
  );
};
export default Generation;
