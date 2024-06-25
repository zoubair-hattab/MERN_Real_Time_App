import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Link
      to={`/${currentUser?.username}`}
      className="max-w-screen-md mx-auto text-center text-indigo-500 font-medium bg-white p-4 mt-24 flex flex-col gap-3"
    >
      Visit Profile Page
    </Link>
  );
};

export default HomePage;
