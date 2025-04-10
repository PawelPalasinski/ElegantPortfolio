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
    alt: "Mistyczny las o zmierzchu",
    title: "Leśne sanktuarium",
    description: "Promienie zachodzącego słońca przedzierające się przez gęstą mgłę w pradawnym lesie."
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    alt: "Kamienny krąg o świcie",
    title: "Krąg Dawnych",
    description: "Pradawne kamienne kręgi skąpane w pierwszych promieniach wschodzącego słońca."
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    alt: "Jezioro w górach podczas wschodu słońca",
    title: "Zwierciadło duszy",
    description: "Spokojne górskie jezioro odbijające majestatyczne szczyty o wschodzie słońca."
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    alt: "Samotna chata w górach podczas zachodu słońca",
    title: "Ostatni bastion",
    description: "Odizolowana górska chata otoczona dziką przyrodą, miejsce spokoju i kontemplacji."
  },
  {
    id: 5,
    src: "/images/gallery-5.jpg",
    alt: "Górski krajobraz z jeziorem",
    title: "Duch gór",
    description: "Monumentalne szczyty górskie wznoszące się ponad krystalicznie czystym jeziorem."
  },
  {
    id: 6,
    src: "/images/gallery-6.jpg",
    alt: "Zorza polarna nad górami",
    title: "Taniec niebios",
    description: "Hipnotyzująca zorza polarna rozświetlająca nocne niebo nad górskim krajobrazem."
  },
  {
    id: 7,
    src: "/images/gallery-7.jpg",
    alt: "Gwieździste niebo nad górami",
    title: "Kosmiczne wrota",
    description: "Rozgwieżdżone niebo ukazujące Drogę Mleczną nad cichym górskim krajobrazem."
  },
  {
    id: 8,
    src: "/images/gallery-8.jpg",
    alt: "Górskie jezioro o świcie",
    title: "Poranek objawień",
    description: "Pierwszy blask dnia obejmujący spokojne wody górskiego jeziora."
  },
  {
    id: 9,
    src: "/images/gallery-9.jpg",
    alt: "Jesienny las we mgle",
    title: "Szept jesieni",
    description: "Złociste barwy jesieni zanurzone w tajemniczej mgle leśnej."
  }
];