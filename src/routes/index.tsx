import { Button } from "#/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Github, Twitter } from "lucide-react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <>
      <section className="py-5">
        <h1 className="text-4xl font-black">koko 🥥</h1>
        <h2 className="leading-8">Full-stack developer</h2>
      </section>

      <article className="mb-4">
        <h1 className="font-bold text-primary py-2 text-xl">About me</h1>
        <div>
          <p>
            I&apos;m a full-stack developer with a passion for building web
            applications and learning new technologies. As of now, I study web
            development and try to expand my knowledge by taking on new
            challenges in backend. Apart from coding, I enjoy playing video
            games with friends, listen to music, and occassionally play golf.
          </p>
        </div>
      </article>

      <article className="mb-4">
        <h1 className="font-bold text-primary py-2 text-xl">Work</h1>
        <div>
          <p>
            Most of my projects are built with Next.js/TanStack Start using TypeScript and
            Tailwind CSS. The main focus of my work is to create accessible and
            user-friendly applications available to everyone.
          </p>
          <p className="leading-loose">View some of my work below.</p>
        </div>
        <Link to="/work">
          <Button variant="default" size="sm" className="mt-4">
            Previous work <ChevronRight />
          </Button>
        </Link>
      </article>

      <article>
        <h1 className="font-bold text-primary py-2 text-xl">Skills</h1>
        <ul className="space-y-4">
          <li>
            <p>
              <strong>Languages:</strong>
              <br /> JavaScript, TypeScript, Python, C++, HTML, CSS, SQL, Bash,
              Shell Scripting
            </p>
          </li>
          <li>
            <p>
              <strong>Technologies:</strong>
              <br /> React.js, Node.js, Next.js, TanStack Start, Astro.js, AWS, Supabase,
              Linux, Git, Docker, Firebase
            </p>
          </li>
          <li>
            <p>
              <strong>Tools:</strong>
              <br /> Git, Postgres, Supabase, Google Cloud Platform, Amazon Web
              Services, Docker, Vercel, Cloudflare, Nitro, Jupyter
            </p>
          </li>
          <li>
            <p>
              <strong>Concepts:</strong>
              <br /> Software Engineering, Frontend, Backend, Data Analysis
            </p>
          </li>
        </ul>
      </article>

      {/* <article className="pt-4">
        <h1 className="font-bold text-primary py-2 text-xl">Socials</h1>
        <ul>
          <a
            href="https://github.com/kokobus122"
            target="_blank"
            className="underline-offset-4 hover:underline"
          >
            <li className="flex gap-2">
              <Github />
              @kokobus122
            </li>
          </a>
          <a
            href="https://twitter.com/kokobus5"
            target="_blank"
            className="underline-offset-4 hover:underline"
          >
            <li className="flex gap-2">
              <Twitter />
              @kokobus5
            </li>
          </a>
        </ul>
      </article> */}
    </>
  );
}
