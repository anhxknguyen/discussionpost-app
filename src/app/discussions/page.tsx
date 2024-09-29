import React from "react";

type Discussion = {
  id: number;
  title: string;
  content: string;
  time: string;
};

export const revalidate = 0;

const Discussions = async () => {
  const response = await fetch(process.env.URL + "/api/discussions");
  const discussions: Discussion[] = await response.json();
  discussions.sort((a, b) => {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  });

  return (
    <div className="py-6 flex flex-col gap-2">
      <h1 className="text-2xl font-bold">All Recent Discussions</h1>
      <section className="flex flex-col gap-8">
        {discussions.map((discussion) => {
          return (
            <div
              className="border p-2 border-zinc-700 rounded-md"
              key={discussion.id}
            >
              <h1>{discussion.title}</h1>
              <p>{discussion.content}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Discussions;
