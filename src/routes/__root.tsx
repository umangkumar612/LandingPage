import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NovaAI – Work Smarter with AI Automation" },
      { name: "description", content: "Boost productivity, automate workflows, and save time with NovaAI's next-generation AI tools for students, developers, and businesses." },
      { name: "author", content: "NovaAI" },
      { property: "og:title", content: "NovaAI – Work Smarter with AI Automation" },
      { property: "og:description", content: "Boost productivity, automate workflows, and save time with NovaAI's next-generation AI tools for students, developers, and businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "NovaAI – Work Smarter with AI Automation" },
      { name: "twitter:description", content: "Boost productivity, automate workflows, and save time with NovaAI's next-generation AI tools for students, developers, and businesses." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/13bb0c65-ef6d-499b-b3e8-852938bedb81/id-preview-8217ba99--058e843c-2006-4a72-972c-fa0fe66f7d2c.lovable.app-1776798451779.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/13bb0c65-ef6d-499b-b3e8-852938bedb81/id-preview-8217ba99--058e843c-2006-4a72-972c-fa0fe66f7d2c.lovable.app-1776798451779.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
