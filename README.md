# Notes App

A simple React notes application that allows you to create, edit, delete, and manage notes with local storage persistence.

## Features

- Create new notes with title and content
- Edit existing notes
- Delete notes
- Notes are saved to localStorage and persist between sessions
- Clean, responsive UI with table view
- Real-time updates

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open in your default browser at `http://localhost:3000`.

### Usage

1. **Add a Note**: Enter a title and content in the input fields, then click "Add Note"
2. **Edit a Note**: Click the "Edit" button next to any note to modify it
3. **Delete a Note**: Click the "Delete" button to remove a note
4. **View Notes**: All notes are displayed in a table format

## Project Structure

```
notes-app/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Styles for the App component
│   ├── index.js         # Application entry point
│   └── index.css        # Global styles
├── package.json
└── README.md
```

## Technologies Used

- React 18
- React DOM
- React Scripts (Create React App)
- Local Storage API for data persistence

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)
