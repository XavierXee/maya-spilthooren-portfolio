export interface ProjectDataSection {
  title?: string;
  text?: string;
  img?: string;
  carousel?: string[];
}

export interface ProjectData {
  id: number;
  projectTitle: string;
  role: string;
  card: string;
  header: ProjectDataSection;
  sections: ProjectDataSection[];
}
