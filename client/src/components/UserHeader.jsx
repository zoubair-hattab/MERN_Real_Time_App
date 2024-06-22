import React from 'react';
import toast from 'react-hot-toast';
import { FaInstagram } from 'react-icons/fa';
import { IoMdMore } from 'react-icons/io';
const UserHeader = () => {
  const clickBoard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      toast.success('Copied Url');
    });
  };
  return (
    <div className="max-w-screen-md mx-auto bg-white p-4 mt-24 flex flex-col gap-4  rounded-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl">Zoubair Hattab</h2>
          <div className="flex items-center gap-2">
            <p className="text-gray-600 text-sm">hattab</p>
            <p className="text-gray-500 text-xs">zoubair.net</p>
          </div>
        </div>
        <div>
          <img
            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            alt=""
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
      </div>
      <p className="text-sm">zoubair hattab is co-fonder of this platform.</p>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-sm text-gray-600">350k Follower</p>
            <p className="text-sm text-gray-600">Instegramers</p>
          </div>
          <div className="flex items-center gap-3">
            <FaInstagram size={25} className="text-gray-500" />
            <IoMdMore
              size={25}
              className="text-gray-500"
              onClick={clickBoard}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="py-3 flex-1 border-b-2 border-gray-800">
          <p className="text-gray-800 text-center font-semibold">Theads</p>
        </div>
        <div className="py-3  flex-1">
          <p className="text-gray-800 text-center ">Replies</p>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
