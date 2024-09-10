import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from '../../../app/features/Books/BooksSlice';

const AddBooks = () => {

    const titleRef = useRef();
    const booksLengts = useSelector((state) => (state.booksReducer.length));
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = titleRef.current.value;

        if (title.trim() === "") {
            alert("Please enter a valid book title.");
            return;
        }

        const books = {
            id: booksLengts + 1,
            title: title
        };

        dispatch(addBooks(books));
        alert(`Book "${title}" has been added successfully!`);

        // Clear input field after submission
        titleRef.current.value = "";
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Add New Book</h1>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Book Title
                        </label>
                        <input
                            type="text"
                            ref={titleRef}
                            id="title"
                            name="title"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter book title"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBooks;
