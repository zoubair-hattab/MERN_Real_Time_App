import React, { useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineAddAPhoto } from 'react-icons/md';
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from '../redux/reducers/userReducer';
const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const { currentUser, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleChangeInput = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch('/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...userData, profilePic: image }),
        credentials: 'include',
      });
      const data = await res.json();

      if (!data.success) {
        dispatch(updateUserFailure(data.message));

        toast.error(data.message);
      } else {
        toast.success('User has been updated.');
        dispatch(updateUserSuccess(data.message));
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(updateUserFailure(data.message));
    }
  };
  console.log(image);
  return (
    <div className="max-w-screen-sm mx-auto bg-white p-4 mt-24 flex flex-col gap-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-10 text-center text-gray-700 font-medium text-3xl">
          Update Page
        </div>
        <div className="mb-5">
          <label
            htmlFor="image"
            className="flex  items-center justify-center   mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            <div className="relative">
              {currentUser?.profilePic?.url || image ? (
                <img
                  src={image ? image : currentUser?.profilePic?.url}
                  alt=""
                  className="w-24 h-2w-24 rounded-full"
                />
              ) : (
                <FaRegUserCircle size={50} />
              )}
              <MdOutlineAddAPhoto
                size={29}
                className="absolute bottom-0 right-0 z-50 text-gray-500"
              />
            </div>
          </label>
          <input
            type="file"
            id="image"
            className="hidden"
            onChange={handleFileInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john"
            onChange={handleChangeInput}
            defaultValue={currentUser?.name}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john-doe"
            onChange={handleChangeInput}
            defaultValue={currentUser?.username}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            onChange={handleChangeInput}
            defaultValue={currentUser?.email}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="bio"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Bio
          </label>
          <textarea
            rows={3}
            type="bio"
            id="bio"
            className="bg-gray-50 border resize-none  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bio"
            onChange={handleChangeInput}
            defaultValue={currentUser?.bio}
          />
        </div>

        <button
          type="submit"
          className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            'Update Profile'
          )}
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
