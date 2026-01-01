# Skillswap – Skill Sharing & Learning Platform

A modern web platform where users can share, learn, and exchange skills online. Skillswap connects people who want to teach their skills with those eager to learn, fostering collaborative learning and networking in a community-driven environment.

## 🔗 Live Link

**Live Site:** [https://harmonious-paprenjak-77441a.netlify.app](https://harmonious-paprenjak-77441a.netlify.app)

---

## 📖 Project Overview

Skillswap is designed to create a collaborative learning environment where users can:
- Showcase their skills and expertise
- Discover people with skills they want to learn
- Connect and exchange knowledge with other users
- Build meaningful professional and learning connections

The platform emphasizes ease of use, responsive design, and seamless user experience to make skill sharing accessible to everyone.

---

## ✨ Core Features

- **User Authentication** – Sign up, login, and logout with email/password and Google OAuth
- **Profile Management** – Users can view and edit their profiles with skills and bio
- **Skill Exchange** – Browse other users' skills and connect with them easily
- **Responsive Design** – Mobile-friendly UI for seamless experience across devices
- **Real-time Notifications** – Alerts for skill requests and messages using React Hot Toast
- **Search & Filter** – Find users based on specific skills or categories
- **User Directory** – Browse all registered users and their skill offerings
- **Secure Authentication** – Firebase-powered authentication with email and Google sign-in

---

## 🛠️ Technologies Used

### Frontend
- **React.js** - Component-based UI library
- **React Router** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Firebase** - Authentication and user management
- **React Hot Toast** - Beautiful toast notifications
- **React Icons** - Comprehensive icon library

---

## 📦 Dependencies

### Main Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "firebase": "^10.7.1",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^4.12.0"
}
```

### Dev Dependencies
```json
{
  "vite": "^5.0.0",
  "tailwindcss": "^3.3.0",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.32"
}
```

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase account with Authentication enabled

---

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/nerobkabir/Sunflower.git
cd skillswap
```

---

### **Step 2: Install Dependencies**
```bash
npm install
```

---

### **Step 3: Setup Environment Variables**

Create a `.env.local` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

---

### **Step 4: Setup Firebase**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable **Authentication**:
   - Go to Authentication → Sign-in method
   - Enable **Email/Password** authentication
   - Enable **Google** authentication
4. Get your Firebase configuration:
   - Go to Project Settings → General
   - Scroll down to "Your apps"
   - Copy the Firebase config object
5. Add the Firebase credentials to your `.env.local` file

---

### **Step 5: Configure Tailwind CSS**

Tailwind CSS should already be configured. Verify these files exist:

**tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**postcss.config.js**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

### **Step 6: Start Development Server**
```bash
npm run dev
```

The application will run on: **`http://localhost:5173`**

---

### **Step 7: Build for Production**
```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

---

## 📂 Project Structure
```
skillswap/
│
├── public/                     # Static files
│   └── favicon.ico
│
├── src/
│   ├── assets/                # Images, icons, static files
│   │   └── logo.png
│   │
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SkillCard.jsx
│   │   ├── UserCard.jsx
│   │   └── PrivateRoute.jsx
│   │
│   ├── pages/                 # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Profile.jsx
│   │   ├── EditProfile.jsx
│   │   ├── UserDirectory.jsx
│   │   └── NotFound.jsx
│   │
│   ├── context/               # Context API
│   │   └── AuthContext.jsx
│   │
│   ├── firebase/              # Firebase configuration
│   │   └── firebase.config.js
│   │
│   ├── routes/                # Route configuration
│   │   └── Routes.jsx
│   │
│   ├── App.jsx                # Main App component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles + Tailwind
│
├── .env.local                 # Environment variables (not in git)
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🚀 Deployment

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to Netlify:
   - Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your GitHub repository for continuous deployment

3. Set environment variables in Netlify:
   - Go to Site Settings → Environment Variables
   - Add all Firebase configuration variables

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```


## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Icons](https://react-icons.github.io/react-icons/)


---

**Made with ❤️ by Kabir Hossain**
