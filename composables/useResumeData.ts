import resumeRaw from "~/RESUME.md?raw";
import { parseResumeMarkdown } from "~/utils/parseResumeMarkdown";

const parsedResumeData = parseResumeMarkdown(resumeRaw);

export const useResumeData = () => {
  return useState<ResumeData>("resume-data", () => parsedResumeData);
};