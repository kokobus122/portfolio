import { Button } from "#/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";
import { workData } from "#/lib/data/workData";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/work/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [sortBy, setSortBy] = useState("year-desc");

  const sortedWorkData = useMemo(() => {
    const sorted = [...workData];

    switch (sortBy) {
      case "name-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "year-asc":
        sorted.sort((a, b) => Number(a.date) - Number(b.date));
        break;
      case "year-desc":
      default:
        sorted.sort((a, b) => Number(b.date) - Number(a.date));
        break;
    }

    return sorted;
  }, [sortBy]);

  return (
    <>
      <Select defaultValue="year-desc" onValueChange={setSortBy}>
        <SelectTrigger className="w-45 my-4">
          <SelectValue placeholder="Sort work" />
        </SelectTrigger>
        <SelectContent className="border-zinc-800">
          <SelectGroup>
            <SelectItem value="year-desc">Year (Newest)</SelectItem>
            <SelectItem value="year-asc">Year (Oldest)</SelectItem>
            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <article className="max-w-lg px-8 md:px-0 md:max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedWorkData.map((work) => {
          const workIndex = workData.findIndex(
            (item) => item.title === work.title,
          );

          return (
            <Link
              key={work.title}
              to="/work/$id"
              params={{ id: String(workIndex) }}
            >
              <Card className="pt-0 hover:translate-y-0.5 transition-transform h-full flex flex-col">
                <CardContent className="p-0">
                  <Image
                    src={work.images.image1}
                    width={1920}
                    height={1080}
                    alt={work.title}
                    className="aspect-video w-full object-cover rounded-t-md"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>{work.title}</CardTitle>
                  <CardDescription>
                    {work.liveLink && (
                      <p className="text-primary mb-1">{work.liveLink}</p>
                    )}
                    {work.titledesc}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="w-full mt-auto">
                  <Link
                    to="/work/$id"
                    params={{ id: String(workIndex) }}
                    className="w-full text-primary hover:underline"
                  >
                    <Button
                      variant="default"
                      className="w-full hover:cursor-pointer"
                    >
                      View more
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </article>
    </>
  );
}
