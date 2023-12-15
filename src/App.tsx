import { useEffect, useState } from "react";
import { Repos } from "./components/Repos";
import { UserInfo } from "./components/userInfo";
import { Input } from "./components/Input";
interface UserData {
  avatar_url: string;
  followers: number;
  following: number;
  location: string;
  name: string;
  bio: string;
  // Add other properties as needed
}

function App() {
  const [text, setText] = useState("");
  const [submitedText, setSubmitedText] = useState<string | null>("github");
  const [data, setData] = useState<UserData | null>();
  const fetchGit = async () => {
    const response = await fetch(
      `https://api.github.com/users/${submitedText}`
    );
    const data = await response.json();
    setData(data);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    setSubmitedText(() => text);
    console.log(submitedText);
  };
  useEffect(() => {
    fetchGit();
  }, [submitHandler]);
  const handleUserInput = (e: any) => {
    setText(e.target.value);
  };

  return (
    <main className="bg-[#20293A] h-screen">
      <div
        className="h-[30vh]  flex items-start justify-center  bg-cover    overflow-hidden "
        style={{ backgroundImage: "url(/hero-image-github-profile.png)" }}
      >
        <Input
          submitHandler={submitHandler}
          text={text}
          handleUserInput={handleUserInput}
        />
      </div>
      <div className=" bg-[#20293A] px-8 justify-center  items-center  flex flex-col w-full">
        <div className="px-52 pb-10">
          {data && (
            <div className="w-full flex ">
              <span className="relative top-1 ">
                <span className="bg-[#20293A] p-2 absolute rounded-xl  -top-10  ">
                  <img
                    src={data.avatar_url}
                    alt="userpfp"
                    className="  rounded-lg  h-20"
                  />
                </span>
                <div className=" ml-40 ">
                  <span className="flex flex-col   md:flex-row gap-3   py-3 ">
                    <UserInfo des={"Followers"} info={data.followers} />
                    <UserInfo des={"Following"} info={data.following} />
                    <UserInfo des={"Location"} info={data.location} />
                  </span>
                </div>
                <div className="text-white mt-8">
                  <h1 className="text-3xl">{data.name}</h1>
                  <p className="text-gray-400 mt-2">{data.bio}</p>
                </div>
              </span>
            </div>
          )}
          <div className=" w-full md:mt-24">
            <Repos submitedText={submitedText} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
