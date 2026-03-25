import { Link, useLocation } from "@tanstack/react-router";
import ThemeToggle from "./ThemeToggle";
import { cn } from "#/lib/utils";
import { ExternalLink } from "lucide-react";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <nav className="flex justify-between mx-6 md:mx-0">
      <Link to="/">
        <h1 className="text-lg font-bold hover:text-primary">koko</h1>
      </Link>
      <ul className="space-y-4 text-right">
        <li>
          <Link
            to="/"
            className={cn(
              pathname === "/" && "bg-primary text-white",
              "p-2 hover:underline underline-offset-4",
            )}
          >
            experience
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            className={cn(
              pathname === "/work" && "bg-primary text-white",
              "p-2 hover:underline underline-offset-4",
            )}
          >
            work
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={cn(
              pathname === "/contact" && "bg-primary text-white",
              "p-2 hover:underline underline-offset-4",
            )}
          >
            contact
          </Link>
        </li>
        {/* <li>
          <Link
            to="../testresume.pdf"
            className="hover:underline underline-offset-4"
          >
            <span>resume</span>
          </Link>
        </li> */}
        <li>
          <a
            href="https://github.com/kokobus122/portfolio"
            target="_blank"
            className="hover:underline underline-offset-4 flex items-center gap-1"
          >
            github repo <ExternalLink size={16} />
          </a>
        </li>
        <ThemeToggle />
      </ul>
    </nav>
  );
}
