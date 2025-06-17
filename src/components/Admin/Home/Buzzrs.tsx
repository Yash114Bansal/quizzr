import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import ClientImage from "@/components/ClientImage";
import CreateAIQuiz from "../Gemini/CreateAIQuiz";
import Clientquizzr from "./Clientquizzrs";

const quizzrs = async () => {
  const session = await getServerSession(authOptions);

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

  return (

    <Clientquizzr quizzes={quizzes} />
  );
};

export default quizzrs;
