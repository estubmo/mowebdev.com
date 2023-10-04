import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createSelectSchema } from "drizzle-typebox";

export const project = sqliteTable(
  "project",
  {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    data: text("data"),

    createdAt: integer("createdAt", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
);
export type Project = typeof project.$inferSelect;

export const selectProjectSchema = createSelectSchema(project);

export const work = sqliteTable(
  "work",
  {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    data: text("data"),

    createdAt: integer("createdAt", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
);
export type Work = typeof work.$inferSelect;

export const selectWorkSchema = createSelectSchema(work);

export const showcase = sqliteTable(
  "showcase",
  {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    data: text("data"),

    createdAt: integer("createdAt", { mode: "timestamp" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
);
export type Showcase = typeof showcase.$inferSelect;

export const selectShowcaseSchema = createSelectSchema(showcase);
