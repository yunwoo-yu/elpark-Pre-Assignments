interface Label {
  label: string;
}

interface Category {
  attributes: { ['im:id']: string; label: string; scheme: string; term: string };
}

interface Id extends Label {
  attributes: { ['im:id']: string };
}

interface ImArtist extends Label {
  attributes: { href: string };
}

interface ImContentType {
  attributes: { term: string; label: string };
  ['im:contentType']: { attributes: { label: string; term: string } };
}

interface ImPrice extends Label {
  attributes: { amount: string; currency: string };
}

interface ImReleaseDate extends Label {
  attributes: Label;
}

interface LinkTypes {
  attributes: { href: string; rel: string; type: string };
}

interface Author {
  name: Label;
  uri: Label;
}

export interface MusicListTypes {
  category: Category;
  id: Id;
  ['im:artist']: ImArtist;
  ['im:contentType']: ImContentType;
  ['im:image']: Label[];
  ['im:itemCount']: Label;
  ['im:name']: Label;
  ['im:price']: ImPrice;
  ['im:releaseDate']: ImReleaseDate;
  link: LinkTypes;
  rights: Label;
  title: Label;
}

export interface MusicStoreData {
  author: Author;
  entry: MusicListTypes[];
  icon: Label;
  id: Label;
  link: LinkTypes[];
  rights: Label;
  title: Label;
  updated: Label;
}
