import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function SnippetShowPage(
  { params }: SnippetShowPageProps
) {
  const snippet = await db.snippet.findFirst({
    where: { id: Number((await params).id) },
  })
  if(!snippet) {
    return notFound();
  }
  return <div>{snippet.title}</div>;
}
