//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Authors data link: https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json

//you must use axios to get the data
import axios from 'axios';
import { fetchAuthorsData, fetchBooksData } from "./helpers.js";


// async function fetchAuthorsData() {
//     const { data: authors } = await axios.get('https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json');
//     return authors;
// }

export const getAuthorById = async (id) => {
    if (!id || typeof id !== 'string' || !id.trim()) {
        throw new Error("Invalid ID: ID must be a non-empty string.");
    }

    const authors = await fetchAuthorsData();
    const author = authors.find((author) => author.id === id.trim());

    if (!author) {
        throw new Error("Author not found.");
    }
    return author;
};


export const searchAuthorsByAge = async (age) => {
    if (typeof age !== 'number' || age < 1 || age > 100 || !Number.isInteger(age)) {
        throw new Error("Invalid age: Age must be an integer between 1 and 100.");
    }

    const authors = await fetchAuthorsData();
    const currentYear = new Date().getFullYear();

    return authors.filter(author => {
        const birthYear = new Date(author.date_of_birth).getFullYear();
        return currentYear - birthYear >= age;
    }).map(author => `${author.first_name} ${author.last_name}`);

};

export const getBooksByState = async (state) => {
    if (typeof state !== 'string' || state.trim().length !== 2) {
        throw new Error("Invalid state: State must be a 2-character string.");
    }

    const authors = await fetchAuthorsData();
    const books = await fetchBooksData();
    const stateUpper = state.toUpperCase().trim();
    const bookTitles = [];

    authors.forEach((author) => {
        if (author.HometownState.toUpperCase() === stateUpper) {
            author.books.forEach((bookId) => {
                const book = books.find((book) => book.id === bookId);
                if (book) {
                    bookTitles.push(book.title);
                }
            });
        }
    });

    return bookTitles;
};

export const searchAuthorsByHometown = async (town, state) => {
    if (!town || typeof town !== 'string' || !town.trim()) {
        throw new Error("Invalid town: Town must be a non-empty string.");
    }

    if (!state || typeof state !== 'string' || state.trim().length !== 2) {
        throw new Error("Invalid state: State must be a 2-character string.");
    }

    const authors = await fetchAuthorsData();
    return authorsFromHometown = authors.filter(author =>
        author.HometownCity.toLowerCase() === normalizedTown &&
        author.HometownState.toUppperCase() === normalizedState).map(author => `${author.first_name} ${author.last_name}`);

};

export const getAuthorBooks = async (authorid) => {
    if (!authorid || typeof authorid !== 'string' || !authorid.trim()) {
        throw new Error("Invalid author ID: Author ID must be a non-empty string.");
    }

    const authors = await fetchAuthorsData();
    const author = authors.find(author => author.id === authorid.trim());
    if (!author) {
        throw new Error("Author not found.");
    }

    const booksData = await import('./books.js');
    return await Promise.all(author.books.map(async (bookId) => {
        const book = await booksData.getBookById(bookId);
        return book.title;
    }));

};
