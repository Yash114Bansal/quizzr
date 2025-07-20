import { prisma } from "@/utils/prisma";
import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";
import Clientquizzr from "./Clientquizzrs";

const quizzrs = async () => {
  const session = await auth();

  if (!session || !session.user) redirect("/api/auth/signin");

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  let quizzes = await prisma.quiz.findMany({
    where: {
      userId: user?.id as string,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return <Clientquizzr quizzes={quizzes} />;
};

export default quizzrs;
