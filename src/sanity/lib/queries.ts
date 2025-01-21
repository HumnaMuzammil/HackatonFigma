import { groq } from "next-sanity";

export const allfoods= groq`*[_type== "food"]`;
export const four = groq`*[_type == "food"] [0..6]`;
export const allchefs= groq`*[_type== "chef"]`;
export const six = groq`*[_type == "chef"] [0..6]`;

