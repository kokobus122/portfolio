import { Button } from "#/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "#/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "#/components/ui/dialog";
import { workData, type Work } from "#/lib/data/workData";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { toast } from "sonner";

export const Route = createFileRoute("/work/$id/")({
  component: RouteComponent,
  errorComponent: () => <NotFound />,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const work: Work = workData[Number(id)];
  return (
    <>
      <header className="mb-4">
        <h1 className="underline font-bold text-2xl underline-offset-4 decoration-primary py-2">
          {work.title}
        </h1>
        <h2 className="text-sm text-muted-foreground">{work.titledesc}</h2>
      </header>
      <Carousel className="w-full my-10 max-w-xs md:max-w-lg mx-auto">
        <CarouselContent>
          {Object.values(work.images)
            .filter(Boolean)
            .map((imageUrl, index) => (
              <CarouselItem key={index}>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="block w-full cursor-zoom-in"
                    >
                      <Image
                        className="rounded-lg"
                        src={imageUrl}
                        alt={work.title ?? ""}
                        width={1920}
                        height={1080}
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[95vh] w-[98vw] max-w-[calc(100vw-1rem)] sm:max-w-[min(1700px,98vw)] border-none bg-transparent p-0 shadow-none">
                    <div className="relative h-[86vh] w-full overflow-hidden rounded-xl border border-white/15 bg-black/75">
                      <div
                        className="absolute inset-0 scale-110 bg-cover bg-center opacity-35 blur-2xl"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                        aria-hidden="true"
                      />
                      <Image
                        className="relative z-10 h-full w-full object-contain"
                        src={imageUrl}
                        alt={work.title ?? ""}
                        width={2560}
                        height={1440}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
        </CarouselContent>
        <div className="mt-4 flex items-center justify-center gap-2 sm:mt-0 sm:contents">
          <CarouselPrevious className="static top-auto left-auto right-auto translate-y-0 sm:absolute sm:top-1/2 sm:-left-12 sm:-translate-y-1/2" />
          <CarouselNext className="static top-auto left-auto right-auto translate-y-0 sm:absolute sm:top-1/2 sm:-right-12 sm:-translate-y-1/2" />
        </div>
      </Carousel>
      <section>
        <ul>
          <li className="my-4 leading-loose">
            <p className="bg-primary inline p-1 text-white">Tech</p>{" "}
            {work.techStack.join(", ")}
          </li>
          <li className="my-4 leading-loose">
            <p className="bg-primary inline p-1 text-white">Published</p>{" "}
            {work.date}
          </li>
        </ul>
        <p className="leading-loose">{work.description}</p>
      </section>
      <article className="flex gap-2 my-2">
        {work.liveLink ? (
          <a href={work.liveLink} target="_blank" rel="noopener noreferrer">
            <Button variant="default">Live</Button>
          </a>
        ) : (
          <Button variant="default" onClick={() => toast("Link not found")}>
            Live
          </Button>
        )}

        {work.githubLink ? (
          <a href={work.githubLink} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">Github</Button>
          </a>
        ) : (
          <Button
            variant="secondary"
            onClick={() => toast("Github link not found")}
          >
            Github
          </Button>
        )}
      </article>
    </>
  );
}

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Work Not Found</h1>
      <p className="text-lg text-muted-foreground">
        The work you are looking for does not exist.
      </p>
      <Link to="/">
        <Button variant="default" className="mt-6">
          Return home
        </Button>
      </Link>
    </div>
  );
};
