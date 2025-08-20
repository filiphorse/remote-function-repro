// src/lib/remote-functions/test.remote.ts
import { query, command } from '$app/server';

// GET works
export const pingGet = query(async () => {
	return { pong: true };
});

// POST fails in prod
export const pingPost = command('unchecked', async (input: { ok: boolean }) => {
	return { pong: input.ok };
});
