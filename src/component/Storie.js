const Storie = ({ image, name }) => {
  return (
    <div className="w-24 h-36 bg-gray-100 shadow-md rounded-lg flex flex-col items-center justify-center">
      <div className="">
        <img src={image} alt={name} className="h-full rounded-t-lg" />
        <a href="">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-7 inset-x-0 left-1/3 text-white z-20 bottom-5 relative font-semibold bg-blue-500 border-white border-2 rounded-full"
          >
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>
        </a>
      </div>
      <p className="text-sm p-2 text-center font-semibold">Cree une story</p>
    </div>
  );
};

export default Storie;
