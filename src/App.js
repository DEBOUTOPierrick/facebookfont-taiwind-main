import React from "react";
import Header from "./component/Header";
import Menupage from "./component/Menupage";
import Actuality from "./component/Actuality";
import Groups from "./component/Groups";

const App = () => {
  return (
  
      <div className="h-full mx-2 w-screen">
        <div className="flex">
        <Header />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mt-16">
          <div className="gap-2 hidden xl:block  ">
            <Menupage />
          </div>
          <div className="col-span-4 md:col-span-2 bg-red-600s">
            <Actuality />
          </div>
          <div className="">
            <Groups />
          </div>
        </div>
        
      </div>
  
  );
};

export default App;
