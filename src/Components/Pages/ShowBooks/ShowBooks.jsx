import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooks, showBooks, editBooks } from '../../../app/features/Books/BooksSlice';

const ShowBooks = () => {
    const books = useSelector((state) => state.booksReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showBooks());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteBooks(id));
    }

    const [editId, setEditId] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEdit = (id, title) => {
        setEditId(id);
        setNewTitle(title);
        setIsModalOpen(true);
    }

    const handleSaveEdit = () => {
        if (editId && newTitle) {
            dispatch(editBooks({ id: editId, title: newTitle }));
            setIsModalOpen(false);
            setEditId(null);
            setNewTitle('');
        }
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">Show Books</h1>

            <div className="w-[50%]">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-2">{book.title}</h3>

                        <div className="flex space-x-4">
                            <button 
                                onClick={() => handleDelete(book.id)} 
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                            >
                                Delete
                            </button>
                            <button 
                                onClick={() => handleEdit(book.id, book.title)} 
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Edit Book</h2>
                        <input 
                            type="text" 
                            value={newTitle} 
                            onChange={(e) => setNewTitle(e.target.value)} 
                            className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                        />
                        <div className="flex justify-end space-x-4">
                            <button 
                                onClick={() => setIsModalOpen(false)} 
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleSaveEdit} 
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShowBooks;
