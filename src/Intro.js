import { Suspense, useEffect, useState } from "react";
import { Footer } from "@pmndrs/branding";
import { useProgress } from "@react-three/drei";

function Ready({ setReady }) {
  useEffect(() => () => void setReady(true), []);
  return null;
}

function Loader() {
  const { progress } = useProgress();
  return <div>loading {progress.toFixed()} %</div>;
}

export function Intro({ children }) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {clicked && children}
      <div
        className={`fullscreen bg ${clicked ? "ready" : "notready"} ${
          clicked && "clicked"
        }`}
      >
        <div className="stack">
          <a href="#" onClick={() => setClicked(true)}>
            {!clicked && "Click to continue"}
          </a>
        </div>
        <Footer date="2. June" year="2021" />
      </div>
    </>
  );
}
