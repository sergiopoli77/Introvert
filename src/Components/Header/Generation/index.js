import Gen1 from "./Gen 1";
import Gen2 from "./Gen 2";
import Gen3 from "./Gen 3";
import Gen4 from "./Gen 4";
const Generation = ({ text }) => {
  return (
    <div>
      <h2>{text}</h2>
      <Gen1 text="SergioGen1 - using props" />
      <Gen2 text="SergioGen2 - using props" />
      <Gen3 text="GloriaGen3 - using props" />
      <Gen4 text="GloriaGen4 - using props" />
    </div>
  );
};
export default Generation;
