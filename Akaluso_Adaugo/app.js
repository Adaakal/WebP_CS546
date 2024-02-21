/*

Create a product of your choice.
Log the newly created product. (Just that product, not all products)
Create another product of your choice.
Query all products, and log them all
Create the 3rd product of your choice.
Log the newly created 3rd product. (Just that product, not all product)
Rename the first product
Log the first product with the updated name. 
Remove the second product you created.
Query all products, and log them all
Try to create a product with bad input parameters to make sure it throws errors.
Try to remove a product that does not exist to make sure it throws errors.
Try to rename a product that does not exist to make sure it throws errors.
Try to rename a product passing in invalid data for the newProductName parameter to make sure it throws errors.
Try getting a product by ID that does not exist to make sure it throws errors.

*/
import productData from './data/products.js';
import { dbConnection } from './config/mongoConnection.js';
import { ObjectId } from 'mongodb';


const db = await dbConnection();
await db.dropDatabase();

const productOne = await productData.create("Stuart Weitzman Skyhigh 145 Pearl Slide", "The SKYHIGH 145 PEARL SLIDE will instantly and effortlessly elevate any look thanks to its expertly crafted details. These include our signature pearl embellishments, which are applied to both the heel and platform and a 145-mm block heel with a subtle sculptural sensibility, as well as a bold platform, which offers 24/7 style-boosting support. ", "1647597332600741", 550, "Stuart Weitzman", "https://www.stuartweitzman.com/", ["stuart weitzman", "mules", "heel", "high", "platform"], ["shoes", "high heel", "sandals"], "01/03/2021", false);

// Log the newly created product. (Just that product, not all products)

console.log(productOne);

const productTwo = await productData.create("Stuart Weitzman 5050 Bold Bootie", "The 5050 BOLD BOOTIE delivers a new-season take on our iconic 5050 back-stretch boot: It is set on our reimagined BOLD sole with a 40-mm block heel that offers a subtle, wearable boost. Crafted by SW artisans in Spain, it features our innovative half-microstretch, half-leather construction that gives it our signature flawless fit. At once sleek, comfortable and versatile, this silhouette is part of our 5050 Collection, a range of timeless designs inspired by our world-famous over-the-knee boot. ​", "1647597332600742", 357, "Stuart Weitzman", "https://www.stuartweitzman.com/", ["stuart weitzman", "bootie", "round toe", "flat block heel", "ankle"], ["shoes", "boots", "leather"], "01/03/2021", false);

// Query all products, and log them all
const allProducts = await productData.getAll();

console.log(allProducts);

const productThree = await productData.create("Stuart Weitzman SW Bow Slide", "The SW BOW 100 SLIDE is adorned with an SW BOW detail — our modern take on the classic bow featuring Swarovski crystals. It is constructed with elegant straps complete with cutout accents and elevated by a sleek 100-mm stiletto heel. Reach for this glamorous sandal for a look that truly shines.​", "1647597332600743", 275, "Stuart Weitzman", "https://www.stuartweitzman.com/", ["stuart weitzman", "sandal", "round toe", "stiletto heel", "cutout details"], ["shoes", "heels", "sandals"], "04/03/2021", false);

// Log the newly created 3rd product. (Just that product, not all product)
console.log(productThree);

// Rename the first product
const updatedProductOne = await productData.rename(productOne._id, "Stuart Weitzman Skyhigh 145 Pearl Slide in Leopard Print");

// Log the first product with the updated name.
console.log(updatedProductOne);

// Remove the second product you created.
const removedProductTwo = await productData.remove(productTwo._id);

// Query all products, and log them all
const allProductsAfterRemove = await productData.getAll();