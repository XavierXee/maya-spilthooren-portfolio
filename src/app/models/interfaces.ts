export interface GallerySlide {
  asset: string;
  route?: string;
  label?: string;
}

export interface GalleryOptions {
  className: string;
  cellAlign: string;
  wrapAround: boolean;
  contain: boolean;
  autoPlay: boolean;
  pageDots: boolean;
  prevNextButtons: boolean;
}
