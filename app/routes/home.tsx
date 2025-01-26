import { Form, Link, useNavigation } from "react-router";
import { type ReactNode } from "react";
import type { Route } from "./+types/home";
import {
  AppWindow,
  ArrowRight,
  BriefcaseBusiness,
  Computer,
  Database,
  Mail,
  Map,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  MousePointer,
  XIcon,
} from "~/components/Icon";
import FormSpacer from "~/components/FormSpacer";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { badRequest, validateEmail, validateName } from "~/.server/validation";

interface FieldError {
  name?: string;
  email?: string;
  message?: string;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Leonel Espinal" },
    {
      name: "description",
      content: "Software developer based in Los Angeles, California",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();

  let name = String(formData.get("name"));
  let email = String(formData.get("email"));
  let message = String(formData.get("message"));

  let fieldErrors: FieldError = {
    name: validateName(name),
    email: validateEmail(email),
    message: validateName(message),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors });
  }

  // Send email

  return null;
}

export default function Home({ actionData }: Route.ComponentProps) {
  let fieldErrors = actionData?.fieldErrors;

  // if (actionData && typeof actionData === 'object') {

  //   fieldErrors = actionData?.fieldErrors;
  // }

  let socials = [
    {
      link: "https://x.com",
      icon: <XIcon />,
    },
    {
      link: "https://instagram.com",
      icon: <InstagramIcon />,
    },
    {
      link: "https://facebook.com",
      icon: <FacebookIcon />,
    },
  ];
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact errors={fieldErrors || {}} />
      <footer className="bg-brand-yellow py-8">
        <p className="text-center text-xl">Leonel Espinal</p>
        <ul className="flex gap-4 justify-center text-black mt-4">
          {socials.map((item) => (
            <li
              key={crypto.randomUUID()}
              className="hover:scale-105 transition ease-in-out duration-300"
            >
              <a href={item.link} target="_blank" rel="noreferrer noopener">
                <span className="w-6 inline-block">{item.icon}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center mt-4 text-gray-800">
          Copyright &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}

function Hero() {
  let navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/#about",
      title: "About",
    },
    {
      path: "/#contact",
      title: "Contact",
    },
    {
      path: "/#projects",
      title: "Projects",
    },
  ];
  return (
    <div className="px-6 xl:px-0 mt-32 md:mt-48 lg:max-w-4xl xl:max-w-6xl mx-auto">
      <nav className="fixed top-5 right-10 left-10 md:left-20 md:right-20 z-20 bg-[#5b6d5c] text-gray-200 py-3 px-4 rounded-2xl flex justify-between items-center">
        <Link to="/" className="font-semibold flex gap-2">
          <span className="text-brand-yellow ">L</span>
          <span>Lionel</span>
        </Link>
        <button popoverTarget="mobile-menu" className="lg:hidden">
          <Menu />
        </button>
        <ul className="hidden lg:flex gap-4">
          {navLinks.map((item) => (
            <li
              key={crypto.randomUUID()}
              className="hover:text-brand-yellow transition ease-in-out duration-300"
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div
          popover="auto"
          id="mobile-menu"
          className="p-4 rounded-lg bg-white/80 backdrop-blur"
        >
          <div className="flex justify-end">
            <button
              popoverTarget="mobile-menu"
              popoverTargetAction="hide"
              className="text-white w-8 h-8 rounded-full bg-red-500 grid place-items-center"
            >
              <X />
            </button>
          </div>
          <ul className="space-y-2 text-gray-800 mt-4">
            {navLinks.map((item) => (
              <li
                key={crypto.randomUUID()}
                className="hover:text-brand-yellow transition ease-in-out duration-300"
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className=" md:max-w-xl lg:max-w-none mx-auto grid lg:grid-cols-2 gap-16 ">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center lg:text-left">
            Hi, I’m <span className="text-brand-yellow">Leonel Espinal</span> .
            I am a software developer based in LA.
          </h1>
          <p className="mt-4 md:text-lg text-center lg:text-left text-gray-800">
            I design and build high-performing websites and applications that
            deliver exceptional user experiences.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-4">
            <CTA to="/#contact">Contact me</CTA>
            <Link
              to="/#projects"
              className="rounded-3xl border border-brand-yellow hover:bg-gray-100 transition ease-in-out duration-300 px-4 py-2"
            >
              View projects
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative flex justify-end w-56 md:w-64">
            <img src="/blob.svg" alt="" className="w-full" />
            <div className="absolute top-0 w-64 md:w-96 lg:w-[450px]">
              <img
                src="https://www.pngkey.com/png/full/57-576740_black-person-png-businessperson.png"
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute left-4 md:left-auto md:-bottom-12 lg:-bottom-20 top-4 md:top-auto md:right-16 lg:right-24">
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
  let jobs = [
    {
      title: "Software engineer",
      company: "Logicworks",
      period: "July 2022 - present",
      details:
        "Architected and developed a reporting dashboard leveraging FastAPI for high-performance backend APIs and React for interactive frontend components.Designed and implemented scalable, cloud-based data pipelines using AWS Lambda and S3 for real-time report generation.Created reusable React components and optimized rendering for complex data visualizations in Material UI.Improved API response times by 40% by implementing query optimization techniques and asynchronous processing.Partnered with DevOps teams to ensure seamless deployment with Docker and Kubernetes, maintaining 99.9% uptime.",
    },
    {
      title: "Software engineer",
      company: "Redshelf inc",
      period: "January 2021 - April 2022",
      details:
        "Contributed to the development of comprehensive reporting tools using Django for server-side logic and React for frontend UI/UX.Enhanced backend systems by optimizing database queries with PostgreSQL, reducing report generation time by 30%.Implemented a modular React component architecture to streamline code reuse across dashboards.Worked closely with product managers and designers to improve reporting workflows, increasing end-user engagement by 25%.Integrated third-party analytics tools to support detailed data visualizations and reporting insights.",
    },
    {
      title: "Freelance developer",
      company: "",
      period: "June 2018 - December 2020",
      details:
        "Designed and implemented scalable web applications using Flask and Django, focusing on RESTful API development and backend optimization.Built dynamic, responsive user interfaces with React, integrating modern libraries like Redux and Material-UI.Delivered complete solutions, including deployment on platforms like Heroku and Azure Container Apps ensuring smooth CI/CD pipelines.Collaborated with clients to gather requirements, deliver prototypes, and finalize high-quality software within deadlines.",
    },
  ];
  return (
    <section
      id="about"
      className="bg-brand-green mt-24 md:mt-36 lg:mt-48 text-gray-100"
    >
      <div className="py-24 px-6 xl:px-0 lg:max-w-4xl xl:max-w-6xl mx-auto ">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          <div className="lg:order-2 text-center lg:text-left">
            <h2>About me</h2>
            <p className="font-semibold text-3xl lg:text-5xl mt-2">
              Who is <span className="text-brand-yellow">Leonel</span> ?
            </p>
            <p className="text-gray-200 mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              asperiores aliquid tempore dolorum adipisci. Quaerat suscipit
              minus vitae voluptatum, soluta reiciendis nisi. Libero alias vero
              delectus exercitationem architecto expedita molestiae. Rerum
              itaque autem minima reiciendis unde sed quod nam enim.
            </p>

            <div className="mt-4 flex justify-center lg:justify-start">
              <CTA to="/#contact">Contact me</CTA>
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
        <div className="mt-16 max-w-xl mx-auto">
          <h3 className="text-center font-semibold text-xl lg:text-3xl">
            Work experience
          </h3>
          <div className="mt-8 space-y-4">
            {jobs.map((item) => {
              let id = crypto.randomUUID();
              return (
                <div key={id}>
                  <div
                    className={`flex gap-3 p-4 rounded-lg border ${
                      item.period.includes("present")
                        ? "border-brand-yellow"
                        : "border-white/20"
                    } `}
                  >
                    <span>
                      <BriefcaseBusiness
                        className={`${
                          item.period.includes("present")
                            ? "text-brand-yellow"
                            : ""
                        }`}
                      />
                    </span>
                    <div>
                      <p className="text-xl font-semibold">{item.title}</p>
                      <div className="mt-2 flex gap-2 items-center">
                        <p className="text-[#c4d567] font-semibold">
                          {item.company}
                        </p>
                        <span
                          className={`${
                            item.period.includes("present")
                              ? "text-brand-yellow"
                              : "text-gray-200"
                          }`}
                        >
                          ({item.period})
                        </span>
                      </div>
                      <p className="mt-2 line-clamp-2 text-gray-300/90">
                        {item.details}
                      </p>
                      <button
                        popoverTarget={`details-${id}`}
                        className="mt-2 hover:text-brand-yellow"
                      >
                        View more
                      </button>
                    </div>
                  </div>
                  <div
                    key={id}
                    id={`details-${id}`}
                    popover="auto"
                    className="p-4 lg:p-8 rounded-lg"
                  >
                    {/* {content} */}
                    <div className="flex justify-end">
                      <button
                        popoverTarget={`details-${id}`}
                        popoverTargetAction="hide"
                        className="bg-red-500 text-white p-2 rounded-full"
                      >
                        <X />
                      </button>
                    </div>
                    <h4 className="font-semibold text-lg">
                      {item.title} ({item.company})
                    </h4>
                    <p className="mt-4 text-gray-800">{item.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="bg-brand-yellow py-1 rounded-3xl flex items-center gap-1 max-w-fit px-1 group"
    >
      <span className="bg-brand-green group-hover:bg-[#5b6d5c] transition ease-in-out duration-300 py-2 px-4 text-white rounded-3xl">
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
    <section className="mt-24 md:mt-36 lg:mt-48 pt-36 relative">
      <h2 className="text-center">Skills</h2>
      <p className="font-semibold text-3xl lg:text-5xl mt-2 text-center">
        My <span className="text-brand-yellow">skills</span>
      </p>
      <div className="bg-brand-yellow absolute z-10 top-0 w-full">
        <ul className="flex justify-center gap-4 md:gap-8 p-4 w-full items-center">
          <li className="relative after:absolute after:content-['*'] after:-right-3  md:after:-right-5 after:top-1">
            Web design
          </li>
          <li className="relative after:absolute after:content-['*'] after:-right-3  md:after:-right-5 after:top-1">
            Web development
          </li>
          <li className="hidden md:inline-flex relative after:absolute after:content-['*'] after:-right-3  md:after:-right-5 after:top-1">
            UI/UX design
          </li>
          <li>API design</li>
        </ul>
      </div>
      <div className="absolute top-0 w-full bg-brand-green h-16 -rotate-6 lg:-rotate-3"></div>
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
    <section
      id="projects"
      className="mt-24 md:mt-36 lg:mt-48 px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto "
    >
      <h2 className="text-center">Projects</h2>
      <p className="font-semibold text-3xl lg:text-5xl mt-2 text-center">
        My <span className="text-brand-yellow">Projects</span>
      </p>
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <li key={crypto.randomUUID()} className="bg-gray-100 p-4 rounded-lg">
            <img src={item.imageSrc} alt="" className="rounded-lg" />
            <p className="mt-4 font-semibold text-lg">{item.title}</p>
            <Link
              to="/"
              className="bg-brand-yellow hover:bg-brand-light-yellow transition ease-in-out duration-300 px-4 py-2 rounded-md mt-4 flex max-w-fit"
            >
              View project
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-12 flex justify-center">
        <CTA to="/#contact">Contact me</CTA>
      </div>
    </section>
  );
}

function Contact({
  errors,
}: {
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
}) {
  let navigation = useNavigation();
  let isSubmitting = navigation.state === "submitting";

  return (
    <section
      id="contact"
      className="mt-24 md:mt-36 lg:mt-48 bg-brand-green py-24 text-gray-100"
    >
      <div className="px-6 md:px-12 xl:px-0 lg:max-w-4xl xl:max-w-4xl mx-auto">
        <h2 className="text-center">Contact</h2>
        <p className="text-center font-semibold text-3xl lg:text-5xl mt-2">
          Get in <span className="text-brand-yellow">touch</span>{" "}
        </p>
        <p className="text-center mt-4 text-gray-300 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="bg-[#475A47] p-4 mt-8 rounded-lg grid md:grid-cols-2 lg:items-center gap-8">
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
                <Label htmlFor="name">
                  Name{" "}
                  {errors?.name ? (
                    <span className="text-red-500">{errors.name}</span>
                  ) : null}
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  className={`${errors?.name ? "border-2 border-red-500" : ""}`}
                />
              </FormSpacer>
              <FormSpacer>
                <Label htmlFor="email">
                  Email{" "}
                  {errors?.email ? (
                    <span className="text-red-500">{errors.email}</span>
                  ) : null}
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@email.com"
                  className={`${
                    errors?.email ? "border-2 border-red-500" : ""
                  }`}
                />
              </FormSpacer>
              <FormSpacer>
                <Label htmlFor="message">
                  Message{" "}
                  {errors?.message ? (
                    <span className="text-red-500">{errors.message}</span>
                  ) : null}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  className={`${
                    errors?.message ? "border-2 border-red-500" : ""
                  }`}
                />
              </FormSpacer>
              <button
                type="submit"
                className="bg-brand-yellow hover:bg-brand-light-yellow transition ease-in-out duration-300 px-4 py-2 rounded-lg w-full text-black"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
