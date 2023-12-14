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
    <main className="bg-[#20293A]">
      {data.map((item) => (
        <div>
          <img src={item.avatar_url} alt="" />
          <div>
            <span className="flex flex-col gap-3 w-max p-8">
              <UserInfo des={"Followers"} info={item.followers} />
              <UserInfo des={"Following"} info={item.following} />
              <UserInfo des={"Location"} info={item.location} />
            </span>
          </div>
        </div>
      ))}
      <Repos />
    </main>
  );
}

export default App;
