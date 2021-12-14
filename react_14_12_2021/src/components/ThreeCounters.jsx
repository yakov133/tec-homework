import { useState } from "react";

const ThreeCounters = () => {
  const [cuont1, setcuont1] = useState(0);
  const [cuont2, setcuont2] = useState(0);
  const [cuont3, setcuont3] = useState(0);

  return (
    <div>
      <button onClick={()=>setcuont1(cuont1 + 1)}>btn 1</button>
      <p>{cuont1}</p>
      <br />
      <button onClick={()=>setcuont2(cuont2 + 1)}>btn 2</button>
      <p>{cuont2}</p>
      <br />
      <button onClick={()=>setcuont3(cuont3 + 1)}>btn 3</button>
      <p>{cuont3}</p>
      <br />
    </div>
  );
};
export default ThreeCounters;
