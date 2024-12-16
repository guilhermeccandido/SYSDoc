// src/pages/MainPage.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar.jsx';
import DocumentViewer from '../components/DocumentViewer';
import UploadButton from '../components/UploadButton';
import UploadModal from '../components/UploadModal';
import './MainPage.css';  

function MainPage() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  return (
    <div className="main-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <DocumentViewer />
      </div>
      <UploadButton onClick={() => setIsUploadModalOpen(true)} />
      {isUploadModalOpen && (
        <UploadModal onClose={() => setIsUploadModalOpen(false)} />
      )}
    </div>
  );
}

export default MainPage;
