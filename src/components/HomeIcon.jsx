import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import icon from "../icon.png";
import home from "../home.png";

export default function HomeIcon() {
  const navigate = useNavigate();
  const goHome = () => {
    console.log("home");
    navigate("/home");
  };

  return (
    <Image
      alt="it's me, I guess"
      src={home}
      className="me-home"
      onClick={goHome}
    />
  );
}
