## Running the Application Locally

### Prerequisites

- Node.js (at least v16)
- npm (at least v8)
- SQLite (comes bundled with Node.js)

### Backend

1. Clone the repository.
2. Navigate into the `backend` directory.
3. Install dependencies with `npm install`.
4. Build the server in dist folder with `npm run build`.
5. Start the server in dist folder with `npm run start`.
6. Start the locally or on development with `npm run dev`.

The server should now be accessible at `http://localhost:3001`.

### Frontend

1. Clone the repository.
2. Navigate into the `client` directory.
3. Install dependencies with `npm install`.
4. Set environment variables in a `.env.local` file (see `.env.local.example`).
5. Start the development server with `npm run dev`.
6. Build the client side with `npm run build`.

The client should now be accessible at `http://localhost:5173`.

### Project Structure

```
project-root/
├── .gitignore
│   └── settings.json
├── backend/
│   ├── config/
│   │   └── default.json
│   ├── src/
│   │   ├── db/
│   │   │   ├── connection.ts
│   │   │   ├── posts/
│   │   │   │   ├── posts.ts
│   │   │   │   ├── query-templates.ts
│   │   │   │   └── types.ts
│   │   │   └── users/
│   │   │       ├── query-templates.ts
│   │   │       ├── types.ts
│   │   │       └── users.ts
│   │   ├── routes/
│   │   │   ├── posts.ts
│   │   │   └── users.ts
│   │   └── index.ts
│   ├── .gitignore
│   ├── nodemon.json
│   ├── package.json
│   ├── README.md
│   └── tsconfig.json
├── client/
│   ├── **mocks**/
│   │   └── fileMock.js
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── icons/
│   │   │   │   ├── AddCircleIcon.tsx
│   │   │   │   ├── ArrowIcon.tsx
│   │   │   │   └── DeleteIcon.tsx
│   │   │   └── index.ts
│   │   ├── components/
│   │   │   ├── Loader.tsx
│   │   │   ├── NewPostCard.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostFormModal.tsx
│   │   │   └── index.ts
│   │   ├── hooks/
│   │   │   ├── usePosts.ts
│   │   │   └── useUsers.ts
│   │   ├── pages/
│   │   │   ├── UserPosts.tsx
│   │   │   ├── Users.tsx
│   │   │   └── index.ts
│   │   ├── services/
│   │   │   ├── api.ts
│   │   │   └── index.ts
│   │   ├── tests/
│   │   │   └── Pagination.test.tsx
│   │   ├── types/
│   │   │   ├── formData.ts
│   │   │   ├── posts.ts
│   │   │   ├── svg.d.ts
│   │   │   └── users.ts
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   ├── setupTests.ts
│   │   └── vite-env.d.ts
│   ├── .env
│   ├── .env.local.example
│   ├── .gitignore
│   ├── babel.config.js
│   ├── eslint.config.js
│   ├── index.html
│   ├── jest.config.js
│   ├── jest.setup.js
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── tsconfig.test.json
├── README.md
```
