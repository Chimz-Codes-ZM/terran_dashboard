import React from "react";
import Link from "next/link";

const Profile_layout = ({ children, title }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-5">
      <div className="w-48 gap-3 flex flex-col flex-shrink-0">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-green-600">Virtual Tech Village</h1>
          <div className="w-full flex flex-col gap-2 pl-2">
            <Link href="/virtual_tech_village/profile">
              <h1
                className={
                  title === "view profile"
                    ? "border-l-4 pl-2 border-green-600"
                    : "hover:border-l-4 pl-2"
                }
              >
                View Profile
              </h1>
            </Link>
            <Link href="/virtual_tech_village/edit_profile">
              <h1
                className={
                  title === "edit profile"
                    ? "border-l-4 pl-2 border-green-600"
                    : "hover:border-l-4 pl-2"
                }
              >
                Edit Profile
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex py-3 px-5 overflow-x-hidden overflow-y-auto flex-grow shadow rounded h-max lg:w-min flex-col flex-shrink-0">
        {children}
      </div>
    </div>
  );
};

export default Profile_layout;
