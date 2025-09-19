import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useAuth } from './hooks/useAuth';
import Layout from './components/Layout';
import Loading from './components/common/Loading';
import ToastNotifications from './components/common/ToastNotifications';
import FloatingActionButtons from './components/common/FloatingActionButtons';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './components/admin/AdminDashboard';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          backgroundColor: '#f8fafc',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <h2 style={{ color: '#dc3545', marginBottom: '20px' }}>
            Something went wrong.
          </h2>
          <p style={{ color: '#6c757d', marginBottom: '30px' }}>
            Please refresh the page or contact support.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              background: '#0ea5e9',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: 8,
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              '&:hover': {
                background: '#0284c7',
              }
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ThemeProvider>
          <AuthProvider>
            <Layout>
              <AppContent />
            </Layout>
            <ToastNotifications />
            <FloatingActionButtons />
          </AuthProvider>
        </ThemeProvider>
      </Router>
    </ErrorBoundary>
  );
}

// Component utama dengan Suspense
const AppContent = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        
        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} 
        />
        
        {/* Admin Routes */}
        <Route 
          path="/admin" 
          element={<AdminRoute><AdminDashboard /></AdminRoute>} 
        />
        
        {/* Auth Routes */}
        <Route 
          path="/login" 
          element={<PublicRoute><LoginPage /></PublicRoute>} 
        />
        <Route 
          path="/register" 
          element={<PublicRoute><RegisterPage /></PublicRoute>} 
        />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
}

// Route Guards menggunakan custom hook
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (!user || user.role !== 'admin') {
    return <Navigate to="/dashboard" />;
  }
  
  return children;
};

const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  
  return children;
};

export default App;