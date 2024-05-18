import { resumeLink } from "@/utils/data";
import { redirect } from "next/navigation";

export const GET = () => {
  return redirect(resumeLink);
};
