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
    <span className="grid grid-cols-1 md:grid-cols-2  gap-7 flex-col     md:flex-row flex-wrap">
      {data.map((repo) => (
        <article
          className="from-[#111729] bg-gradient-to-r f text-[#4A5567] to-[#1D1B48] flex flex-col gap-3 p-4 rounded-md "
          key={repo.id}
        >
          <h3 className="text-white">{repo.name}</h3>
          <p className="text-[#4A5567]">
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
