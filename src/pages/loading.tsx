import { useEffect, useState } from "react";

const LoadingPage = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (num === 3) {
        setNum(0);
      } else {
        setNum(num + 1);
      }
    }, 400);
  }, [num]);

  const dotsObj: {
    [key: number]: string;
  } = {
    0: "     ",
    1: ".    ",
    2: ". .  ",
    3: ". . .",
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100 flex-column">
      <div className="spinner-border text-success" role="status"></div>
      <p className="mt-3 fs-4 loading-text ">
        Please wait while we fetch your stats {dotsObj[num]}
      </p>
    </div>
  );
};

export default LoadingPage;
