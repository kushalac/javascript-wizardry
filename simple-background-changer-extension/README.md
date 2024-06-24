# Color Background Changer

**Color Background Changer** is a Chrome extension that allows users to change the background color of any webpage to a color of their choice using a simple popup interface.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Files](#files)

## Introduction

Have you ever wanted to customize the look of your favorite websites? With **Color Background Changer**, you can easily change the background color of any webpage to suit your mood or preference. This Chrome extension provides a straightforward and user-friendly interface that allows you to pick a color and apply it instantly to the current webpage. Whether you prefer a calming blue, a vibrant red, or any color in between, this extension gives you the power to personalize your web browsing experience.

## Features

- Change the background color of any webpage to a user-selected color.
- Simple and easy-to-use popup interface.
- Works on most webpages (excluding `chrome://` and `chrome-extension://` pages).

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/kushalac/javascript-wizardry.git
    ```
2. Navigate to the project directory:
    ```bash
    cd javascript-wizardry/simple-background-changer-extension
    ```
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable "Developer mode" in the top right corner.
5. Click "Load unpacked" and select the directory where you cloned/downloaded the repository and remember to remove this README.md file.

## Usage

1. Open any regular webpage (e.g., `https://www.example.com`).
2. Click on the extension icon in the Chrome toolbar to open the popup.
3. Use the color picker to select your desired background color.
4. Click the "Change Background Color" button.
5. The background color of the webpage will change to the selected color.

## Files

- `manifest.json`: The configuration file for the Chrome extension.
- `background.js`: Handles background tasks and listens for action clicks.
- `popup.html`: The user interface for the popup.
- `popup.js`: Contains the logic for user interaction in the popup.
