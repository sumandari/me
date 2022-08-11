
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';

export default function App() {
  return (
    <Container fluid className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
