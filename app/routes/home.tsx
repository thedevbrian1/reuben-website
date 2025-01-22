import { Form, Link } from "react-router";
import type { Route } from "./+types/home";
import type { ReactNode } from "react";
import {
  AppWindow,
  ArrowRight,
  Computer,
  Database,
  Mail,
  Map,
  MapPin,
  Phone,
} from "lucide-react";
import { MousePointer } from "~/components/Icon";
import FormSpacer from "~/components/FormSpacer";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

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
      <About />
      <Skills />
      <Projects />
      <Contact />
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

      {/* FIXME: Fix responsiveness. Looks terrible 🤮🤮 */}
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
          color === "green" ? "text-brand-green" : "text-brand-yellow"
        }`}
      >
        <MousePointer />
      </span>
      <span
        className={`mt-2 inline-block px-6 py-2 rounded-3xl  ${
          color === "green"
            ? "bg-brand-green text-white"
            : "bg-brand-yellow text-black"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

function About() {
  return (
    <section className="bg-brand-green mt-24 text-gray-100">
      <div className="py-24 px-6 xl:px-0 lg:max-w-4xl xl:max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-8">
        <div className="lg:order-2">
          <h2>About me</h2>
          <p className="font-semibold text-3xl lg:text-5xl mt-2">
            Who is <span className="text-brand-yellow">Lionel</span> ?
          </p>
          <p className="text-gray-200 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            asperiores aliquid tempore dolorum adipisci. Quaerat suscipit minus
            vitae voluptatum, soluta reiciendis nisi. Libero alias vero delectus
            exercitationem architecto expedita molestiae. Rerum itaque autem
            minima reiciendis unde sed quod nam enim.
          </p>
          <div className="mt-4">
            <CTA to="/">Contact me</CTA>
          </div>
        </div>
        <div className="lg:order-1 relative z-0 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-brand-yellow before:w-64 before:h-64 lg:before:w-80 lg:before:h-80 before:rounded-full before:-z-10 flex justify-center items-center ">
          <img
            src="https://png.pngtree.com/png-vector/20240123/ourmid/pngtree-avatar-job-businessman-flat-portrait-of-african-american-man-png-image_11459344.png"
            alt=""
            className="w-56 md:w-96 lg:w-[450px]"
          />
        </div>
      </div>
    </section>
  );
}

function CTA({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="bg-brand-yellow py-1 rounded-3xl flex items-center gap-1 max-w-fit px-1"
    >
      <span className="bg-brand-green py-2 px-4 text-white rounded-3xl">
        {children}
      </span>
      <span className="bg-white text-black w-9 h-9 grid place-items-center rounded-full">
        <ArrowRight />
      </span>
    </Link>
  );
}

function Skills() {
  let skills = [
    {
      title: "Web design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit unde maxime rerum laboriosam",
      icon: <AppWindow />,
    },
    {
      title: "Web development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit unde maxime rerum laboriosam",
      icon: <Computer />,
    },
    {
      title: "Database development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit unde maxime rerum laboriosam",
      icon: <Database />,
    },
  ];
  return (
    <section className="mt-24 pt-36 relative">
      <h2 className="text-center">Skills</h2>
      <p className="font-semibold text-3xl lg:text-5xl mt-2 text-center">
        My <span className="text-brand-yellow">skills</span>
      </p>
      <div className="bg-brand-yellow absolute top-0 w-full overflow-x-auto">
        <ul className="flex gap-1 p-4 w-full">
          <li>Web design</li>
          <li>UI/UX design</li>
          <li>Web development</li>
          <li>API design</li>
        </ul>
      </div>
      <ul className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 xl:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        {skills.map((item) => (
          <li
            key={crypto.randomUUID()}
            className="bg-gray-100 p-4 lg:p-8 rounded-lg"
          >
            <span className="bg-brand-yellow rounded-full h-14 w-14 grid place-items-center text-black">
              {item.icon}
            </span>
            <h3 className="font-semibold text-xl mt-4 text-gray-800">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-800">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Projects() {
  let projects = [
    {
      title: "Limitless design",
      imageSrc: "/limitless.png",
      link: "",
    },
    {
      title: "Limitless design",
      imageSrc: "/limitless.png",
      link: "",
    },
    {
      title: "Limitless design",
      imageSrc: "/limitless.png",
      link: "",
    },
    {
      title: "Limitless design",
      imageSrc: "/limitless.png",
      link: "",
    },
  ];
  return (
    <section className="mt-24 px-6 md:max-w-2xl mx-auto ">
      <h2 className="text-center">Projects</h2>
      <p className="font-semibold text-3xl lg:text-5xl mt-2 text-center">
        My <span className="text-brand-yellow">Projects</span>
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <li className="bg-gray-100 p-4 rounded-lg">
            <img src={item.imageSrc} alt="" className="rounded-lg" />
            <p className="mt-4 font-semibold text-lg">{item.title}</p>
            <Link
              to="/"
              className="bg-brand-yellow px-4 py-2 rounded-md mt-4 flex max-w-fit"
            >
              View project
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12 flex justify-center">
        <CTA to="/">Contact me</CTA>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="mt-24 bg-brand-green py-24 text-white">
      <div className="px-6 xl:px-0 lg:max-w-4xl xl:max-w-6xl mx-auto">
        <h2 className="text-center">Contact</h2>
        <p className="text-center font-semibold text-3xl lg:text-5xl mt-2">
          Get in <span className="text-brand-yellow">touch</span>{" "}
        </p>
        <p className="text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="bg-[#475A47] p-4 mt-8 rounded-lg grid lg:grid-cols-2 lg:items-center gap-8">
          <div className="bg-brand-yellow rounded-lg text-black p-4 max-h-fit">
            <h3 className="font-semibold text-xl">Contact information</h3>
            <address className="mt-8 space-y-4">
              <p className="flex gap-2 items-center">
                <span>
                  <Phone />
                </span>
                <a
                  href="tel:+(213) 555-1234"
                  className="hover:underline transition ease-in-out duration-300"
                >
                  (213) 555-1234
                </a>
              </p>
              <p className="flex gap-2 items-center">
                <span>
                  <Mail />
                </span>
                <a
                  href="mailto:leonelcult@gmail.com"
                  className="hover:underline transition ease-in-out duration-300"
                >
                  leonelcult@gmail.com
                </a>
              </p>
              <p className="flex gap-2 items-center">
                <span>
                  <MapPin />
                </span>
                <span>Los Angeles, CA</span>
              </p>
            </address>
          </div>
          <div className="lg:p-8">
            <h3 className="font-semibold text-xl">Send me a message</h3>
            <Form method="post" className="space-y-4 mt-8">
              <FormSpacer>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                />
              </FormSpacer>
              <FormSpacer>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@email.com"
                />
              </FormSpacer>
              <FormSpacer>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" />
              </FormSpacer>
              <button
                type="submit"
                className="bg-brand-yellow px-4 py-2 rounded-lg w-full"
              >
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
