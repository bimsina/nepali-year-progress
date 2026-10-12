/// <reference types="vite/client" />
import type { ReactNode } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import appCss from "../styles.css?url";

const title = "Nepali Year Progress | Track Your Year in Nepali Calendar";
const description =
  "Track your progress through the Nepali year with beautiful visualizations. See how many days have passed in the Nepali calendar year with daily updates.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Nepali year progress, Nepali calendar, Bikram Sambat, year tracker, Nepali date converter",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:site_name", content: "Nepali Year Progress" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Nepali Year Progress" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "/og.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased dark">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
