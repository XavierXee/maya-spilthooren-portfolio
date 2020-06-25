export interface GallerySlide {
  asset: string;
  route?: string;
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
