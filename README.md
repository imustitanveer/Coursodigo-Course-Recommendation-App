# Corsódigo: Course Recommendation App

This project is a **Course Recommendation App** called **Corsódigo** that integrates **FastAPI** for the backend and **Next.js** for the frontend. The application provides recommendations based on a user's query and displays course cards in an interactive way, with the ability to expand into a detailed view.

## Features

- **Search for courses** using FastAPI and sentence embeddings with FAISS
- **Course cards** with images, titles, descriptions, and platform logos
- **Interactive card expansion** for viewing more details
- **Scroll feature** for large descriptions in the overlay modal
- **Responsive layout** for desktop and mobile
- **Loading state** with an animated loader and fun "Please wait" message

## Tech Stack

### Backend
- **FastAPI**: Web framework for building APIs
- **FAISS**: Library for efficient similarity search in large datasets
- **Sentence-Transformers**: For generating embeddings and semantic search

### Frontend
- **Next.js**: React framework for building SSR/SSG web apps
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## Getting Started

### Prerequisites
1. Python 3.8+
2. Node.js (for frontend)
3. pipenv or virtualenv (for backend Python environment)
4. npm or yarn (for frontend package management)

### Setup Backend (FastAPI)
1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2.	Run the FastAPI server:
    ```bash
    uvicorn main:app --reload
    ```

3.	The API will be running on http://127.0.0.1:8000

### Setup Frontend (Next.js)
1.	Install dependencies:
    ``` bash
    npm install
    ```

2.	Run the Next.js development server:
    ``` bash
    npm run dev
    ```

3.	The app will be available at http://localhost:3000

### API Endpoints
- POST /search: Fetch course recommendations based on a query and number of results (top_k).
- Request body:
    ```bash
    {
        "query": "machine learning courses",
        "top_k": 5
    }
    ```

- Response:
    ```bash
    {
    "results": [
        {
        "title": "Introduction to Machine Learning",
        "url": "https://www.coursera.org/learn/ml",
        "image": "https://www.example.com/image.jpg",
        "description": "A beginner-friendly course on machine learning."
        },
        ...
    ]
    }
    ```

# Frontend Components
- CourseCard: Displays course information as a clickable card. Expands into a modal overlay showing detailed information when clicked.
- CoursesPage: Fetches data from the backend API and displays a grid of CourseCard components.

# Notes
- The project uses CORS in FastAPI to enable cross-origin requests from the frontend.
- Tailwind CSS is used for styling and layout management, making the app responsive and clean.
- The overlay modal for the course cards allows users to view the full course description and a link to the course.

# Future Improvements
- Add user authentication (login/signup)
- Implement course filtering (by category, difficulty, etc.)
- Improve loading states and transitions
- Deploy the app to a cloud platform (e.g., AWS, Vercel)

# License

This project is licensed under the MIT License - see the LICENSE file for details.