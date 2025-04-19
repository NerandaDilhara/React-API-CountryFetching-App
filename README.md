[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/mNaxAqQD)


# 🌍 React Countries Explorer

## Overview

React Countries Explorer is a modern, responsive web application that allows users to discover and explore detailed information about countries from all around the world. Built with **React** using the **Vite** build tool, and styled with **Tailwind CSS**, this application leverages the public [REST Countries API](https://restcountries.com/) to provide real-time, up-to-date information.

The app demonstrates best practices in React development, including the use of functional components, dynamic routing, API integration, responsive UI design, and clean code organization. It's perfect as a learning project for those who want to strengthen their frontend development skills and understand how to work with external APIs.

---

## 🎯 Key Features

- **Global Country List:**  
  Instantly browse all countries with flag images, names, populations, regions, and capitals.

- **Powerful Search:**  
  Find countries by their official name using an intelligent search bar with instant filtering.

- **Region Filtering:**  
  Filter countries by region (Africa, Americas, Asia, Europe, Oceania) with a simple dropdown, instantly updating the list.

- **Country Details View:**  
  Click any country card to view a dedicated page with detailed information:
  - Official country name  
  - Capital city  
  - Region and subregion  
  - Flag image  
  - Population  
  - Area in square kilometers  
  - List of spoken languages  
  - (Optionally: currencies, bordering countries, etc.)

- **Modern, Responsive UI:**  
  The interface is fully responsive, adapting seamlessly to desktops, tablets, and mobile devices. Clean, elegant layouts and smooth interactions are ensured by Tailwind CSS.

- **API Integration:**  
  Fetches and displays live data from multiple REST Countries API endpoints:
  - `/all` — fetch all countries  
  - `/name/{name}` — search by name  
  - `/region/{region}` — filter by region  
  - `/alpha/{code}` — fetch detailed info by country code

- **Single Page Application:**  
  Powered by React Router, all navigation is fast and client-side, with no full page reloads.

- **Robust Error Handling:**  
  Graceful UI feedback is shown when a country is not found or if the API fails.

---

## 🚀 Advanced Functionality (Optional Enhancements)

- **User Authentication:**  
  Integrate Firebase or a similar service to enable login and custom user experiences, such as saving favorite countries.

- **Favorites Feature:**  
  Logged-in users can bookmark their favorite countries for easy access.

- **Accessibility:**  
  Built with accessibility in mind, using semantic HTML and alt text for all images.

- **Testing:**  
  Includes unit and integration tests using Jest and React Testing Library.

---

## 🧰 Tech Stack

- **Frontend:**  
  - [React](https://reactjs.org/) (Functional Components, Hooks)
  - [Vite](https://vitejs.dev/) (Fast development & builds)
  - [Tailwind CSS](https://tailwindcss.com/) (Utility-first styling)
  - [Axios](https://axios-http.com/) (HTTP requests)
  - [React Router](https://reactrouter.com/) (SPA routing)

- **API:**  
  - [REST Countries API](https://restcountries.com/)

- **Testing:**  
  - [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

- **Deployment:**  
  - [Vercel](https://vercel.com/), [Netlify](https://netlify.com/), or any static site host

---

## 🛠️ Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/react-countries-app.git
   cd react-countries-app
