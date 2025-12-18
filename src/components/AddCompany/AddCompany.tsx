import magnifyingGlassIcon from "../../assets/images/svgs/MagnifyingGlass.svg";
import slidersIcon from "../../assets/images/svgs/Sliders.svg";

const AddCompany = () => {
  return (
    <section className="ml-74 mr-8">
      <h1 className="my-8 font-[Noto_Sans_Arabic] font-medium text-[24px] leading-9 text-[#0F0F0F]">
        Add Company
      </h1>

      <div className="flex items-center gap-3 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by ( name- status-CR)"
            className="w-111.5 h-12 rounded-lg border border-[#E8E8E8] py-3 pl-12 pr-4 bg-white placeholder:font-[Noto_Sans_Arabic] placeholder:font-normal placeholder:text-[#C3C3C3] placeholder:text-[14px] placeholder:leading-5.25 focus:outline-none"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <img src={magnifyingGlassIcon} alt="search" />
          </div>
        </div>

        <button className="cursor-pointer w-14 h-12 rounded-lg border border-[#E8E8E8] bg-white py-3 px-4 flex items-center justify-center">
          <img src={slidersIcon} alt="filters" />
        </button>
      </div>

      <div className="overflow-auto rounded-sm border border-[#E8E8E8]">
        <table className="w-full border-collapse">
          <thead className="bg-[#FAFAFA]">
            <tr>
              <th className="border-r border-[#E8E8E8] py-5 px-3.75 text-center font-[Noto_Sans_Arabic] font-normal text-[16px] leading-6 text-[#848484]">
                Company Name
              </th>
              <th className="border-r border-[#E8E8E8] py-5 px-3.75 text-center font-[Noto_Sans_Arabic] font-normal text-[16px] leading-6 text-[#848484]">
                Commercial Registration No
              </th>
              <th className="border-r border-[#E8E8E8] py-5 px-3.75 text-center font-[Noto_Sans_Arabic] font-normal text-[16px] leading-6 text-[#848484]">
                City
              </th>
              <th className="py-5 px-3.75 text-center font-[Noto_Sans_Arabic] font-normal text-[16px] leading-6 text-[#848484]">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="text-center">
            <tr className="bg-white hover:bg-[#F5F5F5] transition-colors">
              <td className="border-t border-r border-[#E8E8E8] py-5 px-3.75 font-[Noto_Sans_Arabic] text-[16px] leading-6 text-[#848484]">
                Panda Retail company
              </td>
              <td className="border-t border-r border-[#E8E8E8] py-5 px-3.75 font-[Noto_Sans_Arabic] text-[16px] leading-6 text-[#848484]">
                101010102456
              </td>
              <td className="border-t border-r border-[#E8E8E8] py-5 px-3.75 font-[Noto_Sans_Arabic] text-[16px] leading-6 text-[#848484]">
                Riyadh
              </td>
              <td className="border-t border-[#E8E8E8] py-5 px-3.75 font-[Noto_Sans_Arabic] text-[16px] leading-6 text-[#848484]">
                <button className="cursor-pointer w-37.25 h-10 rounded-[64px] bg-[#076EA7] py-2.5 px-4 flex items-center justify-center font-[Noto_Sans_Arabic] font-medium text-[14px] leading-5.25 text-white mx-auto">
                  Send Request
                </button>
              </td>
            </tr>

            <tr className="bg-[#FAFAFA] hover:bg-[#F0F0F0] transition-colors">
              <td className="border-t border-r border-[#E8E8E8] py-5 px-3.75 font-[Noto_Sans_Arabic] text-[16px] leading-6 text-[#848484]">
                Savola Group
              </td>
              <td className="border-t border-r border-[#E8E8E8] py-5 px-3.75 font-[Noto_Sans_Arabic] text-[16px] leading-6 text-[#848484]">
                8914510102456
              </td>
              <td className="border-t border-r border-[#E8E8E8] py-5 px-3.75 font-[Noto_Sans_Arabic] text-[16px] leading-6 text-[#848484]">
                Riyadh
              </td>
              <td className="border-t border-[#E8E8E8] py-5 px-3.75 font-[Noto_Sans_Arabic] text-[16px] leading-6 text-[#848484]">
                <button className="cursor-pointer w-37.25 h-10 rounded-[64px] bg-[#F2F6FF] py-2.5 px-4 flex items-center justify-center font-[Noto_Sans_Arabic] font-medium text-[14px] leading-5.25 text-[#076EA7] mx-auto">
                  Request send
                </button>
              </td>
            </tr>

            <tr className="bg-white hover:bg-[#F5F5F5] transition-colors">
              <td className="border-t border-r border-[#E8E8E8] py-5 px-3.75 font-[Noto_Sans_Arabic] text-[16px] leading-6 text-[#848484]">
                Panda Retail company
              </td>
              <td className="border-t border-r border-[#E8E8E8] py-5 px-3.75 font-[Noto_Sans_Arabic] text-[16px] leading-6 text-[#848484]">
                897451023446
              </td>
              <td className="border-t border-r border-[#E8E8E8] py-5 px-3.75 font-[Noto_Sans_Arabic] text-[16px] leading-6 text-[#848484]">
                Riyadh
              </td>
              <td className="border-t border-[#E8E8E8] py-5 px-3.75 font-[Noto_Sans_Arabic] text-[16px] leading-6 text-[#848484]">
                <button
                  disabled
                  className="cursor-not-allowed w-37.25 h-10 rounded-[64px] bg-[#FAFAFA] py-2.5 px-4 flex items-center justify-center font-[Noto_Sans_Arabic] font-medium text-[14px] leading-5.25 text-[#AAAAAA] mx-auto"
                >
                  Added
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AddCompany;
