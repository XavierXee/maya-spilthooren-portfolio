import {GallerySlide} from './interfaces';

export interface ProjectDataSection {
  title?: string;
  text?: string;
  img?: string;
  carousel?: GallerySlide[];
}

export interface ProjectData {
  id: number;
  projectTitle: string;
  role: string;
  card: string;
  header: ProjectDataSection;
  sections: ProjectDataSection[];
}
