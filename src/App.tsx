import "./styles.css";
import store, { Book } from "./store";
import { useState } from "react";
// import Modal from "./Modal";

export default function Libray() {
  const [newBookTitle, setNewBookTitle] = useState("");
  const [editedBookTitle, setEditedBookTitle] = useState("");
  const [editedBookId, setEditedBookId] = useState(Number);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const {
    memberName,
    books,
    addBook,
    editBook,
    updateMemberName,
    deleteBook,
    resetStore,
  } = store();

  const updateName = () => {
    const newName = "Albert Johnson";
    updateMemberName(newName);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBookTitle((e.target as HTMLInputElement).value);
  };
  const handleEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedBookTitle((e.target as HTMLInputElement).value);
  };

  const handleAddBook = () => {
    if (newBookTitle != "") {
      const newBook: Book = {
        id: books.length + 1,
        title: newBookTitle,
      };
      addBook(newBook);
      setNewBookTitle("");
    }
  };

  const handleEdit = (id: number, title: string) => {
    setEditedBookId(id);
    setEditedBookTitle(title);
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleDoneEdit = () => {
    if (editedBookTitle != "") {
      const editedBook: Book = {
        id: editedBookId,
        title: editedBookTitle,
      };
      editBook(editedBook);
      setEditedBookTitle("");
      setIsEditModalOpen(!isEditModalOpen);
    }
  };

  const handleDelete = (id: number) => {
    deleteBook(id);
  };

  const handleReset = () => {
    resetStore(books);
  };

  return (
    <div className="App">
      <h1>Library Store</h1>
      <h4>Welcome: {memberName} </h4>
      <button onClick={updateName}>Change Name</button>
      <p>
        <strong>Book Title:</strong>
        <br />
        <input
          type="text"
          onChange={handleTitle}
          value={newBookTitle}
          placeholder="Enter a new book title"
        />
        <button onClick={() => handleAddBook()}>Add</button>
      </p>
      <br />
      <div style={{ display: !isEditModalOpen ? "none" : "block" }}>
        <p>Edit</p>
        <input
          type="text"
          onChange={handleEditTitle}
          value={editedBookTitle}
          placeholder="enter a book title"
        />
        <button onClick={handleDoneEdit}>Done</button>
        <br />
        <br />
      </div>
      {books.map(({ id, title }) => (
        <div className="card" key={id}>
          <p>{title}</p>
          {/* <button onClick={() => setIsModalOpen(!isModalOpen)}>Edit</button> */}
          <button onClick={() => handleEdit(id, title)}>Edit</button>
          <button onClick={() => handleDelete(id)}>X</button>
        </div>
      ))}
      <br />
      <br />
      <br />
      <button onClick={handleReset}>Reset App</button>
    </div>
  );
}
