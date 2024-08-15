import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const countWords = (str: string) => {
  str = str.replace(/[^a-zA-Z ]/g, "");
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");
  return str.split(" ").length;
};

export const findMultiple = (x: number) => {
  if (x >= 12 && x % 3 === 0) return true;
  return false;
};
