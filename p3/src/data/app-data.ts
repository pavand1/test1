export interface IMenuItem {
  id: number;
  title: string;
  author: string;
  year: number;
}

export const dropdownData: IMenuItem[] = [
  {
    id: 1,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1955,
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    id: 4,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    year: 1939,
  },
];
