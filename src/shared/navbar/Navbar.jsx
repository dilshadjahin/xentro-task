import { FiMenu } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import MobileDrawer from "../../components/mobileDrawer/MobileDrawer";
import { bool } from 'prop-types';


const Navbar = ({ isClicked, setIsClicked,isVerticalLayout }) => {
  const [open, setOpen] = useState(false);

  const isLarge = useMediaQuery({ query: "(max-width: 1200px)" });
  const showDrawer = () => {
    setOpen(true);
  };




  return (
    <div className={`flex justify-between items-center w-full ${isVerticalLayout ? "max-w-[1200px] mx-auto" : ""}`}>
      <div className="flex items-center gap-6">
        {!isLarge ? (<div className=" cursor-pointer" >
          {!isVerticalLayout && <FiMenu />}
        </div>) : (
          <div className=" cursor-pointer" onClick={showDrawer}>
            <FiMenu />
          </div>
        )}

        <MobileDrawer open={open} setOpen={setOpen} />

      </div>

    </div>
  );
};

Navbar.propTypes = {
  isClicked: bool,
  setIsClicked: bool,
  isVerticalLayout: bool,
};
export default Navbar;
