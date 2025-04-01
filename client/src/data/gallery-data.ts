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
    src: "https://images.unsplash.com/photo-1504194104404-433180773017?q=80&w=2670&auto=format&fit=crop",
    alt: "Mistyczny las o zmierzchu",
    title: "Leśne sanktuarium",
    description: "Promienie zachodzącego słońca przedzierające się przez gęstą mgłę w pradawnym lesie."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1518371885040-9ae2ecc48fcd?q=80&w=2670&auto=format&fit=crop",
    alt: "Kamienny krąg o świcie",
    title: "Krąg Dawnych",
    description: "Pradawne kamienne kręgi skąpane w pierwszych promieniach wschodzącego słońca."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1464297162577-f5295c892194?q=80&w=2670&auto=format&fit=crop",
    alt: "Jezioro w górach podczas wschodu słońca",
    title: "Zwierciadło duszy",
    description: "Spokojne górskie jezioro odbijające majestatyczne szczyty o wschodzie słońca."
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2670&auto=format&fit=crop",
    alt: "Samotna chata w górach podczas zachodu słońca",
    title: "Ostatni bastion",
    description: "Odizolowana górska chata otoczona dziką przyrodą, miejsce spokoju i kontemplacji."
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2670&auto=format&fit=crop",
    alt: "Górski krajobraz z jeziorem",
    title: "Duch gór",
    description: "Monumentalne szczyty górskie wznoszące się ponad krystalicznie czystym jeziorem."
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2670&auto=format&fit=crop",
    alt: "Zorza polarna nad górami",
    title: "Taniec niebios",
    description: "Hipnotyzująca zorza polarna rozświetlająca nocne niebo nad górskim krajobrazem."
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2670&auto=format&fit=crop",
    alt: "Gwieździste niebo nad górami",
    title: "Kosmiczne wrota",
    description: "Rozgwieżdżone niebo ukazujące Drogę Mleczną nad cichym górskim krajobrazem."
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2670&auto=format&fit=crop",
    alt: "Górskie jezioro o świcie",
    title: "Poranek objawień",
    description: "Pierwszy blask dnia obejmujący spokojne wody górskiego jeziora."
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?q=80&w=2676&auto=format&fit=crop",
    alt: "Jesienny las we mgle",
    title: "Szept jesieni",
    description: "Złociste barwy jesieni zanurzone w tajemniczej mgle leśnej."
  }
];