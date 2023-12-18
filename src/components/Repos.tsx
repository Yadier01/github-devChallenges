import { SvgChield, SvgForks, SvgStar } from "../components/SVGS";
import { useEffect, useState } from "react";

interface License {
  name: string;
}

interface Repo {
  id: number;
  name: string;
  description: string;
  license: License | null;
  forks: number;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
}

interface ReposProps {
  submitedText: string | null;
}

export const Repos = ({ submitedText }: ReposProps) => {
  const [data, setData] = useState<Repo[]>([]);
  const [showAllRepos, setShowAllRepos] = useState(false);
  const currDay = new Date();

  const fetchGit = async (perPage: number) => {
    const response = await fetch(
      `https://api.github.com/users/${submitedText}/repos?per_page=${perPage}`
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    const perPage = showAllRepos ? 1000 : 4;
    fetchGit(perPage);
  }, [submitedText, showAllRepos]);

  const difDays = (dateD: string) => {
    const dayD = new Date(dateD);
    const differenceInTime = currDay.getTime() - dayD.getTime();
    const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

    return differenceInDays;
  };

  return (
    <div>
      <span className="grid grid-cols-1 md:grid-cols-2  gap-7 flex-col md:flex-row flex-wrap">
        {data.map((item) => (
          <a href={item.html_url} target="_blank" key={item.id}>
            <article
              className="from-[#111729] bg-gradient-to-r f text-[#4A5567] to-[#1D1B48] flex flex-col gap-3 p-6 rounded-md "
              key={item.id}
            >
              <h3 className="text-white">{item.name}</h3>
              <p className="text-[#4A5567]">
                {item.description}
              </p>
              <div className="flex gap-3">
                {item.license && (
                  <p className="flex gap-1">
                    <SvgChield />
                    {item.license.name}
                  </p>
                )}
                <p className="flex gap-1">
                  <SvgForks />
                  {item.forks}
                </p>
                <p className="flex gap-1">
                  <SvgStar />
                  {item.stargazers_count}
                </p>
                <p>Updated {difDays(item.updated_at)} days ago</p>
              </div>
            </article>
          </a>
        ))}
      </span>

      <button
        className="text-gray-400 pt-10"
        onClick={() => setShowAllRepos(!showAllRepos)}
      >
        {showAllRepos ? "View Recent Repositories" : "View All Repositories"}
      </button>
    </div>
  );
};
