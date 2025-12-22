# Basic Node.js Informational Site

A simple multi-page informational site built with vanilla Node.js to practice server-side routing and HTTP fundamentals.

## Project Overview

This project is a basic Node.js server that serves static HTML pages based on URL routing. No frameworks, no libraries—just pure Node doing its thing.

## Features

- Custom routing without Express or other frameworks
- Serves static HTML files based on URL paths
- 404 error handling for invalid routes
- Built using Node's native `http` and `fs` modules

## Routes

- `/` - Home page (index.html)
- `/about` - About page
- `/contact-me` - Contact page
- All other routes - 404 page

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation & Usage

1. Clone or download this project
2. Navigate to the project directory
3. Run the server:

```bash
   node index.js
```

4. Open your browser and navigate to `localhost:8080`

## What I Learned

- Setting up a basic HTTP server with Node.js
- Reading and serving HTML files using the `fs` module
- Implementing basic routing logic
- Handling 404 errors

## Built With

- Node.js
- HTML

---

_This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum._
