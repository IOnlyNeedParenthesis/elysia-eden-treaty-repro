import Elysia, { t } from "elysia";
import { helloModel as Hello1Model } from "./models";
import { helloModel as Hello2Model } from "@app/models";

const app = new Elysia()
	.post("/hello1", async ({ body }) => {
		return `Hello ${body.email}`;
	}, {
		body: Hello1Model
	})
	.post("/hello2", async ({ body }) => {
		return `Hello ${body.email}`;
	}, {
		body: Hello2Model
	});

export default app;
export type App = typeof app;
