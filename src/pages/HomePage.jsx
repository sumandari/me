import TypeWriterEffect from "react-typewriter-effect";

import HomeIcon from "../components/HomeIcon";

export default function LandingPage() {
  return (
    <div className="HomePage">
      <TypeWriterEffect
        textStyle={{
          color: "#fff",
          fontWeight: 500,
          textAlign: "center",
        }}
        startDelay={1000}
        cursorColor="#3F3D56"
        text="You're home!"
        typeSpeed={30}
        hideCursorAfterText
        anyprops="yes"
      />

      <HomeIcon />
    </div>
  );
}
