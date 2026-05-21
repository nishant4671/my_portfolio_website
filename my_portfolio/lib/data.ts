import data from "./data.json";

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  skills: string[];
  tech: string[];
  date: string;
  role: string;
  domain: string;
  status?: string;
  description: string[];
  howIDidIt: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Education {
  slug: string;
  title: string;
  type: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
  skills: string[];
}

export const projects: Project[] = data.projects;
export const achievements: Achievement[] = data.achievements;
export const skills = data.skills;
export const education: Education[] = data.education;
export const certifications: Certification[] = data.certifications;
export const hobbies: string[] = data.hobbies;
export const personalInfo = data.personalInfo;
