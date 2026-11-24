import { mkdirSync, writeFileSync } from "node:fs";

// The Dog Ate My Homework: Funniest Excuse
// One line, in the dog's own voice: a dog who believes it did nothing wrong,
// explaining why the homework got eaten.
const line =
  "The teacher said it's a dog-eat-dog world, so I took notes — on your homework. With my teeth. You're welcome.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
