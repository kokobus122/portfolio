import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Site not found</h1>
      <p className="text-lg text-muted-foreground">
        The site you are looking for does not exist.
      </p>
      <Link to="/">
        <Button variant="default" className="mt-6">
          Return home
        </Button>
      </Link>
    </div>
  );
};
