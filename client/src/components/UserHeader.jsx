import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaInstagram } from 'react-icons/fa';
import { IoMdMore } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { followUser, loadUser } from '../redux/actions/userAction';
const UserHeader = ({ user }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [isFollow, setFollow] = useState(
    user?.followers.includes(currentUser._id)
  );
  const clickBoard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      toast.success('Copied Url');
    });
  };
  const dispatch = useDispatch();
  const followUnFollow = async () => {
    try {
      if (isFollow) {
        const res = await fetch(`/api/user/follow/${user._id}`, {
          method: 'POST',
          credentials: 'include',
        });
        const data = await res.json();
        if (!data.success) {
          toast.error(data.message);
        } else {
          toast.success('UnFollow User');
          user.followers.pop();
        }
      } else {
        const res = await fetch(`/api/user/follow/${user._id}`, {
          method: 'POST',
          credentials: 'include',
        });
        const data = await res.json();
        if (!data.success) {
          toast.error(data.message);
        } else {
          toast.success('Follow User');
          user.followers.push(currentUser);
        }
      }
      setFollow(!isFollow);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="max-w-screen-md mx-auto bg-white p-4 mt-24 flex flex-col gap-4  rounded-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl">{user?.username}</h2>
          <div className="flex items-center gap-2">
            <p className="text-gray-600 text-sm">{user?.name}</p>
            <p className="text-gray-500 text-xs">zoubair.net</p>
          </div>
        </div>
        <div>
          <img
            src={user?.profilePic?.url}
            alt=""
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
      </div>
      <p className="text-sm">{user?.bio}</p>
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-sm text-gray-600">
              {user?.followers?.length} Follower
            </p>
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
      <div>
        {currentUser._id !== user._id && (
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={followUnFollow}
          >
            {isFollow ? 'UnFollow' : 'Follow'}
          </button>
        )}
        {currentUser._id === user._id && (
          <Link
            to="/profile"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Update Profile
          </Link>
        )}
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
