import { useEffect, useState } from "react";
import data from "./data.json";
import { Repos } from "./components/Repos";
import { UserInfo } from "./components/userInfo";
function App() {
  // const [data, setData] = useState();
  // const fetchGit = async () => {
  //   const response = await fetch("https://api.github.com/users/Yadier01/repos");
  //   const data = await response.json();
  //   setData(data);
  // };
  // useEffect(() => {
  //   fetchGit();
  // }, []);
  return (
    <main className="bg-[#20293A] h-screen">
      <div className="h-[25vh] bg-white "></div>
      <div className=" bg-[#20293A] px-8 justify-center  items-center  flex flex-col w-full">
        <div>
          {data.map((item) => (
            <div className="w-full flex ">
              <span className="relative top-1 ">
                <span className="bg-[#20293A] p-2 absolute rounded-xl  -top-10  ">
                  <img
                    src={item.avatar_url}
                    alt="userpfp"
                    className="  rounded-lg  h-20"
                  />
                </span>
                <div className=" ml-40 ">
                  <span className="flex flex-col   md:flex-row gap-3   py-8 ">
                    <UserInfo des={"Followers"} info={item.followers} />
                    <UserInfo des={"Following"} info={item.following} />
                    <UserInfo des={"Location"} info={item.location} />
                  </span>
                </div>
              </span>
            </div>
          ))}
          <div className=" md:mt-24">
            <h1>Github how </h1>
          </div>
          <Repos />
        </div>
      </div>
    </main>
  );
}

export default App;
