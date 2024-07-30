import React from 'react';
import { UserAuth } from '../../hooks/AuthContext';

const Profile = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[50vh]">
        <div className="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
          <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
            <img src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png" className="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />
            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
              <img className="h-full w-full rounded-full" src={user.photoURL} alt="" />
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <p className="text-base font-semibold text-gray-600">{user.displayName}</p>
            <p className="text-base font-normal text-gray-600">{user.email}</p>
            <p className="text-base font-semibold text-gray-600 mt-20 cursor-pointer" onClick={handleSignOut}>
              Log Out
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
