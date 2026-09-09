// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { loadEnv, type Plugin } from "vite";

const devApiPlugin: Plugin = {
  name: "dev-api-event-registration",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === "/api/event-registration" && req.method === "POST") {
        let bodyStr = "";
        req.on("data", (chunk: Buffer | string) => {
          bodyStr += chunk;
        });
        req.on("end", async () => {
          try {
            const parsed = bodyStr ? JSON.parse(bodyStr) : {};
            const { handleEventRegistrationRequest } = await import("./src/server/eventRegistrationHandler");
            const dummyRequest = new Request("http://localhost:8080/api/event-registration", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(parsed),
            });
            const env = loadEnv(server.config.mode, process.cwd(), "");
            const response = await handleEventRegistrationRequest(dummyRequest, env);
            res.statusCode = response.status;
            res.setHeader("Content-Type", "application/json");
            const responseBody = await response.text();
            res.end(responseBody);
          } catch {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ status: "error", error: "Bad request" }));
          }
        });
      } else {
        next();
      }
    });
  },
};

export default defineConfig({
  vite: {
    plugins: [devApiPlugin],
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
