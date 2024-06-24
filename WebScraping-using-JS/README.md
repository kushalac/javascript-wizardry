# Web Scraping using Node.js and Cheerio

This project demonstrates how to perform web scraping using Node.js and Cheerio. It extracts book titles from the website [Books to Scrape](http://books.toscrape.com/).

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [What is Web Scraping?](#what-is-web-scraping)
4. [Technologies Used](#technologies-used)
5. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
6. [Usage](#usage)
7. [Contributing](#contributing)

## Introduction

Web scraping is a technique used to extract data from websites. This project uses Node.js and Cheerio to scrape book titles from a sample website. Cheerio is a fast, flexible, and lean implementation of core jQuery designed specifically for the server. It makes it easy to select, edit, and view DOM elements.

## Features

- Fetches HTML content from a web page
- Extracts and displays book titles from the page
- Simple and easy-to-understand implementation

## What is Web Scraping?

Web scraping is the process of automatically extracting data from web pages. It involves fetching the HTML of a web page and parsing it to extract the desired information. Web scraping is commonly used for data mining, data analysis, and automated testing.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Cheerio**: A library for parsing and manipulating HTML, designed for use in server-side applications.
- **Axios**: A promise-based HTTP client for making requests to fetch HTML content.

## Getting Started

### Prerequisites

To run this project, you need to have Node.js installed on your machine. You can download and install Node.js from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/kushalac/javascript-wizardry.git
    ```
2. Navigate to the project directory:
    ```bash
    cd javascript-wizardry/WebScraping-using-JS
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```

## Usage

1. Run the script:
    ```bash
    node Web-Scraping-using-js.js
    ```
2. The script will fetch the HTML content from the specified URL and extract the book titles, displaying them in the console.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or additional features to add, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

