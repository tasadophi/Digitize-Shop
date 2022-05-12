import Image from "next/image";
import SearchIcon from "./icons/SearchIcon";
import ChevronIcon from "./icons/ChevronIcon";

const MobileHeader = ({ logo, title }) => {
  return (
    <div className="flex justify-between items-center py-6 lg:hidden">
      {logo ? (
        <Image
          src="/images/Logo.png"
          alt="digitize logo"
          width={50}
          height={42}
        />
      ) : (
        <span className="w-8 h-8 bg-white shadow-md rounded-xl p-1 flex justify-center items-center -rotate-90">
          <ChevronIcon />
        </span>
      )}
      <span className="text-slate-800 font-bold">{title}</span>
      <span className="w-8 h-8 p-1 bg-white shadow flex justify-center items-center rounded">
        <SearchIcon />
      </span>
    </div>
  );
};

export default MobileHeader;
