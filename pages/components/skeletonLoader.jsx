import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="md:max-w-[19.8rem] mb-4">
      <div class="block px-4 p-2 shadow rounded">
        <div
          alt="Art"
          class=" w-full object-cover h-40 overflow-hidden bg-gray-200 rounded animate-pulse duration-100"
        />

        <div class="mt-2 text-lg h-5 w-full font-bold bg-gray-200 animate-pulse">
          
        </div>

        <p class="mt-2 text-lg h-5 w-2/3 font-bold bg-gray-200 animate-pulse">
          
        </p>
      </div>
    </div>
  );
};

export default SkeletonLoader;
