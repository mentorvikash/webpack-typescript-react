import IMAGE from "./react.png";
import SVGIMAGE from "./react.svg"

export const App = () => {
  return (
    <>
      <h1>This is our react app</h1>
      <img src={IMAGE} alt="raact logo" height={300} width={300} />
      <img src={SVGIMAGE} alt="raact logo" height={300} width={300} />
    </>
  );
};
