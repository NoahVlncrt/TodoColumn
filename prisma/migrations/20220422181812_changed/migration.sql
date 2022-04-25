-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "userId" INTEGER
);
INSERT INTO "new_task" ("done", "id", "title", "userId") SELECT "done", "id", "title", "userId" FROM "task";
DROP TABLE "task";
ALTER TABLE "new_task" RENAME TO "task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
