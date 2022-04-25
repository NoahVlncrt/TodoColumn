-- CreateTable
CREATE TABLE "task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_personTotask" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "person" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "task" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_personTotask_AB_unique" ON "_personTotask"("A", "B");

-- CreateIndex
CREATE INDEX "_personTotask_B_index" ON "_personTotask"("B");
