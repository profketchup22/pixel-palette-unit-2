# pixel-palette-unit-2
# Pixel Palette

Pixel Palette is a nostalgic drawing app inspired by Kid Pix — but in the browser. Users can pick up a brush, choose from a palette of colors, place stamps, and create colorful artwork on a digital canvas. With the addition of a full-stack backend, users can now create an account, save their drawings, and come back to view, edit, or delete their artwork from a personal gallery. The app is designed to be simple, fun, and accessible — whether you're an imaginative kid making silly alien scenes or an adult looking for a creative outlet.

## Technologies Used

- **Frontend:** React, JavaScript, Vite, React Router, CSS
- **Backend:** Java 21, Spring Boot, Spring Data JPA, Hibernate
- **Database:** MySQL
- **Tools:** IntelliJ IDEA, VS Code, MySQL Workbench, Postman, Git/GitHub

## Features

- Freehand brush drawing with adjustable size and 10 preset colors
- Stamp mode for placing pre-made images onto the canvas
- Clear canvas to start fresh
- User registration and login with form validation
- Save artwork with a custom title
- Personal gallery displaying all saved artwork
- Edit saved artwork (reloads onto the canvas for redrawing and re-saving)
- Delete saved artwork with confirmation prompt
- Responsive design with breakpoints for tablet and mobile
- Duplicate username prevention and blank-field validation

## Installation

To run this project locally, you'll need **Node.js**, **Java 21**, **MySQL**, and **Git** installed.

### 1. Clone the repo
```
git clone https://github.com/profketchup22/pixel-palette-unit-2.git
cd pixel-palette-unit-2
```

### 2. Set up the database
- Open MySQL Workbench and create a new schema called `pixel_palette_db`
- Note your MySQL username, password, and port number

### 3. Configure the backend
- Navigate to `java-spring-boot-back-end-app/pixel-palette-api/src/main/resources/`
- Create a file called `application-secrets.properties` (this file is gitignored and won't be in the repo)
- Add the following, replacing with your own MySQL credentials:
```
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```
- Open the `java-spring-boot-back-end-app` folder in IntelliJ IDEA
- Run the `PixelPaletteApiApplication` main class — Hibernate will auto-create the tables

### 4. Start the frontend
```
cd react-front-end-app
npm install
npm run dev
```
- Open the localhost URL shown in your terminal (usually `http://localhost:5173`)
- Make sure both the backend (IntelliJ) and frontend (VS Code terminal) are running at the same time

## Wireframes

https://docs.google.com/document/d/15PYjO0SuDCx41vgPXYTJQqAmv2iInu2grDFqYUhPdlg/edit?tab=t.0

## Entity Relationship Diagram

[PASTE YOUR ERD LINK HERE — e.g. https://dbdiagram.io/d/6a8d0f0afd15a881e5ec7398]

## Unsolved Problems & Future Features

- **Server-side authentication:** Currently, the backend trusts whatever user ID is sent in a request rather than independently verifying who is actually logged in. A future version would use Spring Security with sessions or tokens so the server can confirm identity on every request, not just trust the client.
- **Password hashing:** Passwords are currently stored as plain text. A production version would use bcrypt or a similar hashing algorithm so that even if the database were compromised, actual passwords wouldn't be exposed.
- **Persistent login sessions:** Logging in only lasts until the page is refreshed — refreshing sends the user back to a logged-out state. A future version would use localStorage or server-side sessions to remember who's logged in across page reloads.
- **Suggestion box:** The original app concept included a suggestion/feedback feature that was scoped out of the MVP to focus on core CRUD functionality. This could be added as a third database table with its own relationship to the User model.