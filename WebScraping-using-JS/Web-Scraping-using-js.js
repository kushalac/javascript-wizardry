// Web Scraping using Node.js and Cheerio
// Web scraping is a technique used to extract data from websites. Now we will see how to scrape a website using Node.js and Cheerio.
// Cheerio is a fast, flexible, and lean implementation of core jQuery designed specifically for the server. It makes it easy to select, edit, and view DOM elements.
// In this example, we will scrape the titles of books from the website http://books.toscrape.com/.
// Now we will import the required libraries
// axios is used to fetch the HTML of the web page
const axios = require('axios');
const cheerio = require('cheerio');

// URL of the web page we want to scrape
const url = 'http://books.toscrape.com/';

// Function to scrape data
async function scrapeData() {
  try {
    // Fetch the HTML of the web page
    const { data } = await axios.get(url);
    
    // Load the HTML into cheerio
    const $ = cheerio.load(data);
    
    // Extract book titles
    $('.product_pod h3 a').each((index, element) => {
      const bookTitle = $(element).attr('title');
      console.log(`Book ${index + 1}: ${bookTitle}`);
    });

  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

// Run the scrape function
scrapeData();
