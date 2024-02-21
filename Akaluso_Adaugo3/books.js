//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Books data link: https://gist.githubusercontent.com/graffixnyc/3381b3ba73c249bfcab1e44d836acb48/raw/e14678cd750a4c4a93614a33a840607dd83fdacc/books.json


import { fetchAuthorsData, fetchBooksData } from "./helpers.js";
import axios from 'axios';

export const getBookById = async (id) => {
    if (!id || typeof id !== 'string' || !id.trim()) {
        throw new Error("Invalid ID: ID must be a non-empty string.");
    }

    const books = await fetchBooksData();
    const book = books.find(book => book.id === id.trim());
    if (!book) {
        throw new Error("Book not found.");
    }

    return book;
};

export const booksByPageCount = async (min, max) => {
    if (typeof min !== 'number' || typeof max !== 'number' || min < 0 || max <= min) {
        throw new Error("Invalid page count range: Ensure min is a positive number and max is greater than min.");
    }
    const books = await fetchBooksData();
    return books.filter(book => book.pageCount >= min && book.pageCount <= max).map(book => book.id);
};

export const sameYear = async (year) => {
    if (typeof year !== 'number' || year < 0 || !Number.isInteger(year)) {
        throw new Error("Invalid year: Year must be a positive integer.");
    }

    const books = await fetchBooksData();
    return books.filter(book => new Date(book.publicationDate).getFullYear() === year);
};

export const minMaxPrice = async () => {
    const books = await fetchBooksData();
    let minPriceBookIds = [], maxPriceBookIds = [];
    let minPrice = Infinity, maxPrice = -Infinity;

    books.forEach(book => {
        if (book.price < minPrice) {
            minPrice = book.price;
            minPriceBookIds = [book.id];

        } else if (book.price === minPrice) {
            minPriceBookIds.push(book.id);
        }

        if (book.price > maxPrice) {
            maxPrice = book.price;
            maxPriceBookIds = [book.id];
        } else if (book.price === maxPrice) {
            maxPriceBookIds.push(book.id);
        }
    });
    return { cheapest: minPriceBookIds, mostExpensive: maxPriceBookIds };
};

export const searchBooksByPublisher = async (publisher) => {
    if (typeof publisher !== 'string' || !publisher.trim()) {
        throw new Error("Invalid publisher: Publisher must be a non-empty string.");
    }

    const books = await fetchBooksData();
    const booksByPublisher = books.filter(book => book.publisher === publisher.trim());
    if (booksByPublisher.length === 0) {
        throw new Error("No books found for this publisher.");
    }

    return booksByPublisher.map(book => book.id);
};
