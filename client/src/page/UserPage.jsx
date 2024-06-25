import React, { useEffect, useState } from 'react';
import UserHeader from '../components/UserHeader';
import UserPost from '../components/UserPost';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UserPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [errMsg, setErrMsg] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch(`/api/user/profile/${username}`);
        const data = await res.json();
        if (!data.success) {
          setErrMsg(true);
        } else {
          setUser(data.message);
        }
      } catch (error) {
        setErrMsg(true);
      }
    };
    loadUser();
  }, [username]);
  if (!user)
    return (
      <p className="py-56 text-center text-2xl font-medium text-red-500">
        User is not found
      </p>
    );
  return (
    <div>
      <UserHeader user={user} />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
      <UserPost />
    </div>
  );
};

export default UserPage;
