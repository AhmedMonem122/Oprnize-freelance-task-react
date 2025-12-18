import logo from "../../assets/images/svgs/oprnize-logo.svg";
import avatarIcon from "../../assets/images/svgs/avatar-image.svg";
import settingsIcon from "../../assets/images/svgs/Settings.svg";
import notificationsIcon from "../../assets/images/svgs/Notification.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-[#FAFAFA] py-4 px-6 border-b border-[#E8E8E8] rounded-t-3xl h-16">
      <div className="flex items-center justify-between">
        <div>
          <a href="/">
            <img src={logo} alt="oprnize logo" />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="cursor-pointer">
            {" "}
            <img src={avatarIcon} alt="avatar icon" />{" "}
          </button>
          <button className="cursor-pointer">
            {" "}
            <img src={settingsIcon} alt="settings icon" />{" "}
          </button>
          <button className="cursor-pointer relative">
            {" "}
            <img src={notificationsIcon} alt="notifications icon" />{" "}
            <span className="absolute top-0 left-0 w-6.25 h-2.75 flex items-center justify-center rounded-lg py-0.5 px-1.5 bg-[#B90404] font-[Inter] font-normal text-[10px] text-white leading-3">
              9+
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
