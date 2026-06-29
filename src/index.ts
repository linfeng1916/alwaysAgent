/**
 * alwaysAgent — TypeScript entry point.
 *
 * Initializes the project and prints a greeting. Run after `npm install && npm run build`
 * with `npm start`.
 */
interface AgentInfo {
  name: string;
  version: string;
}

function main(): void {
  const agent: AgentInfo = {
    name: "alwaysAgent",
    version: "0.1.0",
  };

  console.log(`Hello from ${agent.name} ${agent.version}`);
  console.log("TypeScript project initialized successfully.");
}

main();
