-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "header" TEXT NOT NULL,
    "body" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
