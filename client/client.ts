import { treaty } from "@elysiajs/eden";
import type { App } from "../server/app/app";

const client = treaty<App>("");

// type hints are as expected
client.hello1.post()

// type hints are correct!
client.hello2.post()
