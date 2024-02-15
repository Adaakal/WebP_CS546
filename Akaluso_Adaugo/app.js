/*
This file is where you will import your functions from the two other files and run test cases on your functions by calling them with various inputs.  We will not use this file for grading and is only for your testing purposes to make sure:

1. Your functions in your 2 files are exporting correctly.

2. They are returning the correct output based on the input supplied (throwing errors when you're supposed to, returning the right results etc..).

Note: 
1. You will need that calls your functions like the example below. 
2. Do not create any other files beside the 'package.json' - meaning your zip should only have the files and folder in this stub and a 'package.json' file.
3. Submit all files (including package.json) in a zip with your name in the following format: LastName_FirstName.zip.
4. DO NOT submit a zip containing your node_modules folder.

import * as authors from "./authors.js");

    try{
        const authorData = await authors.getAuthors();
        console.log (authorData);
    }catch(e){
        console.log (e);
    }
*/
import * as authors from "./authors.js";
import * as books from "./books.js";
import axios from 'axios';
import { fetchAuthorsData, fetchBooksData } from "./helpers.js";

async function testAuthorsFuncs() {
    console.log("Testing Authors Functions");

    // Testing getAuthorById
    try {
        const authorA_P = await authors.getAuthorById("2155574a-80b0-4389-8bb3-3240da52b770");
        console.log("getAuthorById Sucess:", authorA_P);
    } catch (error) {
        console.error("getAuthorById Error:", error.message);
    }

    try {
        const authorA_F = await authors.getAuthorById("56");
        console.log("getAuthorById Sucess:", authorA_F);
    } catch (error) {
        console.error("getAuthorById Error:", error.message);
    }

    // Testing searchAuthorsByAge
    try {
        const authorB_P = await authors.searchAuthorsByAge(30);
        console.log("searchAuthorsByAge Sucess:", authorB_P);
    } catch (error) {
        console.error("searchAuthorsByAge Error:", error.message);
    }

    try {
        const authorB_F = await authors.searchAuthorsByAge(150);
        console.log("searchAuthorsByAge Sucess:", authorB_F);
    } catch (error) {
        console.error("searchAuthorsByAge Error:", error.message);
    }

    // Testing getBooksByState
    try {
        const authorA_P = await authors.getBooksByState("NY");
        console.log("getBooksByState Sucess:", authorA_P);
    } catch (error) {
        console.error("getBooksByState Error:", error.message);
    }

    try {
        const authorA_F = await authors.getBooksByState("NYC");
        console.log("getBooksByState Sucess:", authorA_F);
    } catch (error) {
        console.error("getBooksByState Error:", error.message);
    }

    console.log("Testing Authors Functions Complete");
}
async function testBooksFuncs() {
    console.log("Testing Book Functions");

    // Test getBooksById
    try {
        const bookB_P = await books.getBookById("519c733a-6a5d-451f-927d-0e860b5d1e3d");
        console.log("getBookId Success:", bookB_P);
    } catch (error) {
        console.error("getBookId Error:", error.message);
    }

    try {
        const bookB_F = await books.getBookById("i67");
        console.log("getBookId Success:", bookB_F);
    } catch (error) {
        console.error("getBookId Error:", error.message);
    }

    // Test booksByPageCount
    try {
        const bookA_P = await books.booksByPageCount(100, 200);
        console.log("booksByPageCount Success:", bookA_P);
    } catch (error) {
        console.error("booksByPageCount Error:", error.message);
    }

    try {
        const bookA_F = await books.booksByPageCount(-100, 200);
        console.log("booksByPageCount Success:", bookA_F);
    } catch (error) {
        console.error("booksByPageCount Error:", error.message);
    }

    // Test sameYear
    try {
        const bookC_P = await books.sameYear(2010);
        console.log("sameYear Success:", bookC_P);
    } catch (error) {
        console.error("sameYear Error:", error.message);
    }

    try {
        const bookC_F = await books.sameYear();
        console.log("sameYear Success:", bookC_F);
    } catch (error) {
        console.error("sameYear Error:", error.message);
    }

    // Test minMaxPrice
    try {
        const bookD_P = await books.minMaxPrice();
        console.log("minMaxPrice Success:", bookD_P);
    } catch (error) {
        console.error("minMaxPrice Error:", error.message);
    }

    try {
        const bookD_F = await books.minMaxPrice();
        console.log("minMaxPrice Success:", bookD_F);
    } catch (error) {
        console.error("minMaxPrice Error:", error.message);
    }

    // Test searchBooksByPublisher
    try {
        const bookE_P = await books.searchBooksByPublisher("Penguin");
        console.log("searchBooksByPublisher Success:", bookE_P);
    } catch (error) {
        console.error("searchBooksByPublisher Error:", error.message);
    }

    try {
        const bookE_F = await books.searchBooksByPublisher();
        console.log("searchBooksByPublisher Success:", bookE_F);
    } catch (error) {
        console.error("searchBooksByPublisher Error:", error.message);
    }




}



testAuthorsFuncs();
testBooksFuncs();
