import Featured from "./Featured";
import Navbar from "./Navbar";
import Scrolling from "./Scrolling";
import Slider from "./Slider";


const Header = () => {
  return (
    <>
      <Navbar ></Navbar>
      <Slider ></Slider>
      <Scrolling></Scrolling>
      <Featured></Featured>
    </>
  );
};

export default Header;