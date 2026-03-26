import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="py-5">
        <h1 className="text-4xl font-bold">Contact me</h1>
      </section>
      <article className="mb-2">
        <p>
          Have any questions about my work or just want to say hello? Feel free
          to reach out.
        </p>
        <h1 className="font-bold text-primary py-2 text-xl">Mail</h1>
        <div>
          <p>
            You can reach me through my email{" "}
            <a
              className="text-primary hover:underline underline-offset-4"
              href="mailto:kokobus123@gmail.com"
            >
              kokobus123@gmail.com
            </a>
            .
          </p>
        </div>
      </article>
      <article className="mb-4">
        <h1 className="font-bold text-primary py-2 text-xl">Discord</h1>
        <div>
          I&apos;m also active on discord, tag:{" "}
          <p className="rounded-md border border-zinc-800 bg-card text-card-foreground shadow-sm inline px-2 py-1 font-mono">
            kokobus
          </p>
        </div>
      </article>
    </>
  );
}
