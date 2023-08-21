import Image from "next/image";
import { FC } from "react";
interface UserHeaderProps {
  name: string;
  email: string;
}
const UserHeader: FC<UserHeaderProps> = ({ name, email }) => {
  return (
    <div className="w-full bg-white flex p-3 gap-2 items-center border-b">
      <div className="relative">
        <Image
          height={40}
          width={40}
          className="h-12 w-12 rounded-full border-2"
          src="/images/avatar.png"
          alt=""
        />
        <div className="w-3 h-3 rounded-full bg-green-500 absolute bottom-0 right-1 border-2 border-white"></div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-sm font-bold">{name}</h1>
        <span className="text-xs text-gray-400">{email}</span>
      </div>
    </div>
  );
};

export default UserHeader;
