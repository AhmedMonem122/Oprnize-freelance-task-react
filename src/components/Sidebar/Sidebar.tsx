import BuildingsIcon from "./BuildingsIcon/BuildingsIcon";

const Sidebar = () => {
  return (
    <aside className="fixed top-16 bg-[#FAFAFA] w-66 h-lvh border-l border-[#E8E8E8]">
      <ul className="flex flex-col items-start justify-start gap-2 pt-8 pr-4 pl-3.75">
        <li className="w-full">
          <a
            href="/"
            className="flex items-center gap-2.5 w-full bg-[#FAFAFA] rounded-sm border border-[#FAFAFA] py-2.5 px-3 transition-all duration-300 ease-in-out"
          >
            <div>
              <BuildingsIcon className="#AAAAAA" />
            </div>
            <p className="font-[Noto_Sans_Arabic] font-medium text-[#AAAAAA] text-[14px] leading-5.25">
              Employees
            </p>
          </a>
        </li>
        <li className="w-full">
          <a
            href="/"
            className="flex items-center gap-2.5 w-full bg-[#FAFAFA] rounded-sm border border-[#FAFAFA] py-2.5 px-3 transition-all duration-300 ease-in-out"
          >
            <div>
              <BuildingsIcon className="#AAAAAA" />
            </div>
            <p className="font-[Noto_Sans_Arabic] font-medium text-[#AAAAAA] text-[14px] leading-5.25">
              Requests
            </p>
          </a>
        </li>
        <li className="w-full">
          <a
            href="/"
            className="flex items-center gap-2.5 w-full bg-[#FAFAFA] rounded-sm border border-[#FAFAFA] py-2.5 px-3 transition-all duration-300 ease-in-out"
          >
            <div>
              <BuildingsIcon className="#AAAAAA" />
            </div>
            <p className="font-[Noto_Sans_Arabic] font-medium text-[#AAAAAA] text-[14px] leading-5.25">
              Leaves
            </p>
          </a>
        </li>
        <li className="w-full">
          <a
            href="/"
            className="flex items-center gap-2.5 w-full bg-[#FAFAFA] rounded-sm border border-[#FAFAFA] py-2.5 px-3 transition-all duration-300 ease-in-out"
          >
            <div>
              <BuildingsIcon className="#AAAAAA" />
            </div>
            <p className="font-[Noto_Sans_Arabic] font-medium text-[#AAAAAA] text-[14px] leading-5.25">
              Payroll
            </p>
          </a>
        </li>
        <li className="w-full">
          <a
            href="/"
            className="flex items-center gap-2.5 w-full bg-[#F2F6FF] rounded-sm border border-[#D4EEFD] py-2.5 px-3 transition-all duration-300 ease-in-out relative before:absolute before:content-[''] before:w-1 before:h-3 before:bg-[#076EA7] before:rounded-sm before:top-1/2 before:-translate-y-1/2 before:left-0"
          >
            <div>
              <BuildingsIcon className="#076EA7" />
            </div>
            <p className="font-[Noto_Sans_Arabic] font-medium text-[#076EA7] text-[14px] leading-5.25">
              Companies
            </p>
          </a>
        </li>
        <li className="w-full">
          <a
            href="/"
            className="flex items-center gap-2.5 w-full bg-[#FAFAFA] rounded-sm border border-[#FAFAFA] py-2.5 px-3 transition-all duration-300 ease-in-out"
          >
            <div>
              <BuildingsIcon className="#AAAAAA" />
            </div>
            <p className="font-[Noto_Sans_Arabic] font-medium text-[#AAAAAA] text-[14px] leading-5.25">
              setting
            </p>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
