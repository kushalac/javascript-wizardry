# WebGL Rotating Colored Square

This project demonstrates how to create a rotating colored square using WebGL. WebGL (Web Graphics Library) is a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins. It is based on OpenGL ES, a low-level 3D graphics API.

## Table of Contents

1. [Introduction](#introduction)
2. [What is WebGL?](#what-is-webgl)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)

## Introduction

In this project, we create a simple rotating colored square using WebGL. The square rotates continuously, demonstrating basic graphics rendering using WebGL.

## What is WebGL?

WebGL (Web Graphics Library) is a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins. It is based on OpenGL ES, a low-level 3D graphics API. WebGL enables developers to create dynamic and visually appealing graphics directly in the browser.

## Technologies Used

- **WebGL**: A JavaScript API for rendering interactive 2D and 3D graphics within web browsers.
- **JavaScript**: The programming language used for scripting the WebGL application.
- **HTML/CSS**: Used for structuring and styling the web page.
- **Canvas Element**: Provides a drawing surface for the WebGL graphics.

## Components Used

### Vertex Shader

A vertex shader is a type of shader used in WebGL (and OpenGL) to manipulate the position and attributes of vertices in 3D space. In this project, we define a vertex shader that calculates the final position of each vertex based on a rotation matrix.

### Fragment Shader

A fragment shader is another type of shader used in WebGL (and OpenGL) to determine the color of each fragment (pixel) in a rendered object. In this project, we define a simple fragment shader that assigns a uniform color to each fragment.

### WebGL Context

The WebGL context (`const gl = canvas.getContext('webgl');`) is the interface between JavaScript and the WebGL API. It provides methods for initializing WebGL, creating shaders, buffers, and rendering graphics.

### Buffers and Attributes

Buffers are used to store data (such as vertices and colors) on the GPU. Attributes are variables associated with each vertex, such as position and color. We initialize buffers and attributes to store and pass vertex and color data to the shaders.

### Rotation Matrix

The rotation matrix (`getRotationMatrix(angle)`) is used to rotate the square around its center. It calculates the transformation matrix based on the rotation angle in degrees.

## Getting Started

### Prerequisites

To run this project, you need a modern web browser that supports WebGL. Most recent versions of major browsers like Chrome, Firefox, Safari, and Edge support WebGL.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/kushalac/webgl-rotating-square.git
    ```
2. Open the `rotating-colored-square--WebGL.html` file in your web browser.

## Usage

The square will start rotating automatically when you open the web page. You can adjust the rotation speed or modify the colors by editing the JavaScript code in the `rotating-colored-square--WebGL.html` file.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or additional features to add, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.
