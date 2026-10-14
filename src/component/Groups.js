import React from "react";

function Groups() {
  return (
    <>
      <div className="relative">
        <div className="fixed">
          <div className=" hidden lg:block p-5 font-semibold h-full ">
            <h1 className="text-gray-500 font-semibold text-lg">
              Discussions de Groupe
            </h1>

            <div className="flex p-2">
              <div className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-5 font-semibold bg-gray-300 rounded-full"
                >
                  <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
              </div>
              <a href="" className="font-semibold text-black">
                Créer une discussion de groupe
              </a>
            </div>
          </div>

          
        </div>
        <div className="fixed">
        <div class="relative mt-80 mx-8">
            <div class="absolute left-36 top-36 p-3 shadow-xl rounded-full  bg-white z-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 font-semibold text-gray-800 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg></div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Groups;
