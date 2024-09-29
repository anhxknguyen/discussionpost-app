import Image from "next/image";

export default function Home() {
  return (
    <div className="py-6 flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Welcome to Secret Discussions</h1>
      <div>Here, we discuss stuff in secret. Don't tell anyone!</div>
    </div>
  );
}
