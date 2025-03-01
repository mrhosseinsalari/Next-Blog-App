## About Project

This is a simple blog application developed using **Next.js**. The project allows users to view, create, and manage blog posts. It serves as an educational example and a foundation for developers interested in learning Next.js and working with APIs.

## Key Features

- **Categories of Posts**: Blog posts can be viewed based on different categories.

- **Search & Sort of Posts**: Blog posts can be searched by title and description, and sorted by creation date, popularity, and reading time.

- **Pagination of Posts**: Blog posts are displayed in a paginated manner, allowing users to easily navigate between posts.

- **Like & Bookmark of Posts**: Users can like their favorite posts and also bookmark them.

- **Manage Comments**: Users can comment on posts, reply to others' comments and manage comments.

- **Manage Posts**: Users can create new posts and add them to the blog. They can also edit or delete existing posts.

- **Simple and Responsive UI**: The user interface is designed to be responsive and display well on various devices.

- **Authentication and Authorization**: Based on user authentication, the desired accesses are given to them.

## Key Libraries and Their Purpose

- **Next.js**: This framework is used for building React web applications with SSR, SSG and routing capabilities. Some features of next.js used in this project:
  - **React Server Components**
  - **Server actions**
  - **Streaming by Suspense**
  - **Client Components**
  - **Protected route with middleware**

- **React**: The core library for building the user interface.

- **Axios**: Used for making HTTP requests to the server to send or receive data.

- **Tailwind CSS**: Used for quick and responsive styling of components.

- **React Query**: Used for asynchronous remote states management on the client side.

- **React Hook Form**: Used for efficient form management and validation.

## Preview

To view it online, please click on this link : [Next Blog App](https://next-blog-app.ir/)

## How to Set Up the Project

To set up the project locally, follow these steps:

#### 1) Setup Back-End:

To set up the website's back-end, please refer to the following repository and follow the steps to set up the backend:

[Repository Link](https://github.com/mrhosseinsalari/Blog-App-Backend)

#### 2) Clone the Repository:
   ```bash
   git clone https://github.com/mrhosseinsalari/Next-Blog-App.git
   ```
   ```bash
   cd Next-Blog-App
   ```

#### 3) Install Dependencies:
   ```bash
   npm install
   ```

#### 4) Run the Project:
   ```bash
   npm run dev
   ```

#### - Build the Project and Run the Production Build:
   ```bash
   npm run build
   ```
   ```bash
   npm start
   ```
