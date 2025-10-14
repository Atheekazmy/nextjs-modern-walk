"use client";

import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-full mx-auto p-[120px]">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
          Home Page
        </h1>
      </div>
      <div>
        {isPending && <div>Loading...</div>}
        {error && <div>An error has occurred: {error.message}</div>}
        {data && (
          <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
