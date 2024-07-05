import { t } from "elysia";

export const helloModel = t.Object({
	email: t.String(),
	password: t.String({ minLength: 8 })
});