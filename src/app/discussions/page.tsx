import React from "react";

type Discussion = {
  id: number;
  title: string;
  content: string;
};

const Discussions = () => {
  const dis1: Discussion = {
    id: 1,
    title: "The Poop in My Pants",
    content: "I shit my pants",
  };

  const dis2: Discussion = {
    id: 2,
    title: "The Pee in My Pants",
    content: "I pissed myself",
  };

  const discussions: Discussion[] = [dis1, dis2];

  return (
    <div className="py-6 flex flex-col gap-2">
      <h1 className="text-2xl font-bold">All Recent Discussions</h1>
      <section>
        {discussions.map((discussion) => {
          return <div>{discussion.title}</div>;
        })}
      </section>
    </div>
  );
};

export default Discussions;
