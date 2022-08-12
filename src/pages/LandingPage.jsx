import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Link } from "react-bootstrap";

import TypeWriterEffect from "react-typewriter-effect";
import HomeIcon from "../components/HomeIcon";

export default function LandingPage() {
  const navigate = useNavigate();
  const goHome = () => {
    console.log("home");
    navigate("/home");
  };

  useEffect(() => {
    const timer = setTimeout(() => console.log("Initial timeout!"), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="LandingPage">
      <TypeWriterEffect
        textStyle={{
          color: "#fff",
          fontWeight: 500,
          textAlign: "center",
        }}
        startDelay={1000}
        cursorColor="#3e7ed0"
        multiText={[
          "Hej!",
          "This page was built with ReactJs.",
          "I'd be happy to see you around.",
        ]}
        multiTextDelay={1500}
        typeSpeed={30}
        hideCursorAfterText
        anyprops="yes"
      />

      <Button variant="outline-light" className="bored" onClick={goHome}>
        I'm bored. Skip!
      </Button>

      <HomeIcon me />
    </div>
  );
}
