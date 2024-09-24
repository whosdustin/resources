import { createClient } from "@libsql/client/web";

export const turso = createClient({
  url: import.meta.env.TURSO_DB_URL,
  authToken: import.meta.env.TURSO_DB_TOKEN,
});
