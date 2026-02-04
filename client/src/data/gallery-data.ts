export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    alt: "Wilcza Paproć",
    title: "Wilcza Paproć",
    description: ""
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    alt: "Bohaterzy",
    title: "Bohaterzy",
    description: "Ilyas, Lenne i Touge"
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    alt: "Bohaterzy",
    title: "Bohaterzy",
    description: "Arien, Bell i Torlaf"
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    alt: "Wilcza Paproć",
    title: "Miejsca i bohaterowie",
    description: ""
  }
];