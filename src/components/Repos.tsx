import React from "react";
import data from "../dataRepos.json";

export const Repos = () => {
  const currDay = new Date();

  const difDays = (dateD: string) => {
    const dayD = new Date(dateD);
    const differenceInTime = currDay.getTime() - dayD.getTime();
    const differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

    return differenceInDays;
  };

  return (
    <span className="flex gap-7 flex-col ">
      {data.map((repo) => (
        <article
          className="from-[#111729] bg-gradient-to-r f to-[#1D1B48] flex flex-col gap-3 p-4 rounded-md text-white"
          key={repo.id}
        >
          <h3>{repo.name}</h3>
          <p>
            {repo.description} Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Et, nihil.
          </p>
          <div className="flex">
            <p>{repo.license}</p>
            <p>{repo.forks}</p>
            <p>{repo.stargazers_count}</p>
            <p>Updated {difDays(repo.updated_at)} days ago</p>
          </div>
        </article>
      ))}
    </span>
  );
};
