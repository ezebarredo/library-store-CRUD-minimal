import { create } from "zustand";

export type LibraryState = {
  memberName: string | null;
  books: Book[];
  addBook: (books: Book) => void;
  editBook: (editedBook: Book) => void;
  updateMemberName: (name: string) => void;
  deleteBook: (id: number) => void;
  resetStore: (book: Book) => void;
};

export type Book = {
  id: number;
  title: string;
};

const store = create<LibraryState>((set) => ({
  memberName: "Joe Doe",

  books: [{ id: 1, title: "First book" }],

  updateMemberName: (name: string) => set(() => ({ memberName: name })),

  addBook: (book: Book) =>
    set((state: LibraryState) => ({ books: [...state.books, book] })),

  editBook: (editedBook: Book) =>
    set((state: LibraryState) => ({
      books: state.books.map((book) =>
        book.id === editedBook.id ? editedBook : book
      ),
    })),

  deleteBook: (id: number) =>
    set((state: LibraryState) => ({
      books: [...state.books.filter((book) => book.id != id)],
    })),

  resetStore: (book: Book) =>
    set((state: LibraryState) => ({
      books: [{ id: 1, title: "First Book Title" }],
    })),
}));

export default store;
