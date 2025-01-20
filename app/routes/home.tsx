import { Link } from "react-router";
import type { Route } from "./+types/home";
import { MousePointer } from "./components/Icon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

function Hero() {
  return (
    <div className="px-6 xl:px-0 mt-24 grid lg:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold text-center lg:text-left">
          Hi, I’m <span className="text-orange-500">Leonel Espinal</span> . I am
          a web developer based in LA.
        </h1>
        <p className="mt-4 text-center lg:text-left">
          I design and build high-performing websites and applications that
          deliver exceptional user experiences.
        </p>
        <Link to="/">Contact me</Link>
        <Link to="/">View projects</Link>
      </div>

      <div className="border border-black">
        <div className="">
          <div className="border border-red-500 relative flex justify-end">
            <img src="/blob.svg" alt="" className="w-56 md:w-64" />
            <img
              src="https://www.pngkey.com/png/full/57-576740_black-person-png-businessperson.png"
              alt=""
              className="absolute top-0 md:w-96 lg:w-[450px]"
            />
            <div className="absolute left-4 md:left-auto md:-bottom-12 lg:-bottom-20 top-4 md:top-auto md:right-16 lg:right-52">
              <TitleCursor title="Web developer" color="green" />
            </div>
            <div className="absolute bottom-6">
              <TitleCursor title="UI/UX designer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleCursor({ title, color }: { title: string; color?: string }) {
  return (
    <div>
      <span
        className={`${
          color === "green" ? "text-brand-green" : "text-orange-500"
        }`}
      >
        <MousePointer />
      </span>
      <span
        className={`mt-2 inline-block px-6 py-2 rounded-3xl text-white ${
          color === "green" ? "bg-brand-green" : "bg-orange-600"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
