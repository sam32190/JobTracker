import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load the components
const NotFound = lazy(() => import("./pages/NotFound"));
const NavBar = lazy(() => import("./pages/NavBar"));
const Home = lazy(() => import("./pages/Home/Home"));
const Application = lazy(() => import("./components/Application/Application"));
const Login = lazy(() => import("./services/Login"));
const Register = lazy(() => import("./services/Register"));
const Jobs = lazy(() => import("./Job/Jobs"));
const JobDetails = lazy(() => import("./Job/JobDetails"));
const UserProfile = lazy(() => import("./components/Application/UserProfile"));
const ProtectedRoute = lazy(() => import("./services/ProtectedRoute"));
const JobForm = lazy(() => import("./Job/JobForm"));
const JobList = lazy(() => import("./Job/JobList"));
const JobFilter = lazy(() => import("./Job/JobFilter"));
const Applicants = lazy(() => import("./components/Application/Applicants"));
const FavoriteJobs = lazy(() => import("./Job/FavoriteJobs"));

/* Context Provider */
import { MessageProvider } from "./services/MessageContext";

// Main application component
function App() {
  return (
    <MessageProvider>
      <Router>
        <AppContent />
      </Router>
    </MessageProvider>
  );
}

// Handles application layout and routing
function AppContent() {
  const location = useLocation(); // Returns the current route

  // Hide the navbar on login and register pages
  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {/* Show Navbar only if not on login or register page */}
      {!hideNavbar && (
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
        </Suspense>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes: Users must be authenticated */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* Application and job-related routes */}
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<Application />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/jobsearch" element={<JobFilter />} />
          <Route path="/favorites" element={<FavoriteJobs />} />

          {/* User profile and job management routes */}
          <Route path="/myprofile" element={<UserProfile />} />
          <Route path="/add/jobs" element={<JobForm />} />
          <Route path="/update/jobs" element={<JobList />} />
          <Route path="/applicants" element={<Applicants />} />

          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
