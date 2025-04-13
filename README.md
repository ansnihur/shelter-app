# TailHub
Project Overview

TailHub is an intuitive and responsive online platform designed to connect stray animals with loving new homes. The service enables shelters and volunteers to register, manage, and promote adoption opportunities for pets in need, while providing users with an easy way to discover, favorite, and inquire about adoptable animals.

Technologies Used

- HTML
- React
- JavaScript
- SCSS

Design Prototype

The complete UI/UX design is available in  Figma

Live Demo

[View the demo site](https://tailhub-psi.vercel.app/)

Project Team

- Anastasiia Snihur— Full Stack Developer  
- Lida Chorna — UI/UX Designer  
- Kseniia Motorna — UI/UX Designer  
- Varvara Horodskova — UI/UX Designer  
- Yulia Matskiv — Content Creator  

Key Pages & Features

Home Page
- Navigation bar with logo and menu items (Volunteers, Shelters, Log In / Register)
- Hero banner with CTA button
- Explore section: dynamic cards for key features (Donate, Adopt a Pet, Post an Animal, Pet Stories)
- Contact section: feedback form
- Pet Stories showcase
- Footer with contact information and useful links

 Registration / Login
- Option to register as either a volunteer or shelter
- Separate forms for registration and login

 Pet Registration
- Accessible via the "Shelters" link in the navbar
- Submit animal information for listing or shelter accommodation
- Dynamic form fields based on user role (Shelter/Volunteer)

 User Dashboard
- Personal profile management
- Edit personal data
- View favorited announcements (Favorites)
- Access submitted requests (My Requests)

 Pet Announcement Page
- Accessible via "Volunteers" or "Adopt a Pet"
- Detailed pet information: images, age, type, gender, health status, and shelter contact
- Adoption inquiry form
- Search filters: species, age, gender, health condition, location

 Shelter Dashboard
- Manage personal and shelter information
- Post new animal announcements
- Edit or delete listings
- Moderate adoption requests

Application Logic

The platform is fully implemented on the Front-End using React, React Router, and JavaScript. All application logic operates client-side, with data persistence achieved through local storage.

Navigation Overview

For Shelters:
- Register/login via email or social media
- User data stored locally
- Logout animation experience
- Create pet listings via a dedicated form (photos, descriptions, health status)
- Edit/delete existing posts
- Receive volunteer inquiries via a local request list

For Volunteers:
- Volunteer registration builds a personal profile
- Use comprehensive pet search filters (species, age, gender, health, location)
- View detailed pet profiles
- Add animals to "Favorites" (persistent for logged-in users)
- Contact shelters via a dedicated inquiry form
- Register a found pet for listing
- Submit animal transfer requests
- Ask shelters direct questions via quick-access forms


 How to Run This Project Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/yourname/tailhub.git
    ```

2. Navigate into the project directory:
    ```bash
    cd tailhub
    ```

3. Install project dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

License

This project has no formal license and was created as part of a student hackathon initiative.

