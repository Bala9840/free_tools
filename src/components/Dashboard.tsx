import React from 'react';
import { FaFilePdf, FaFileExcel, FaFileWord, FaImage, FaFont, FaTools, FaExchangeAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const toolCategories = [
    {
      name: 'PDF Tools',
      icon: <FaFilePdf size={24} />,
      tools: [
        { name: 'PDF to Word', path: '/pdf-to-word', icon: <FaFileWord /> },
        { name: 'PDF to Excel', path: '/pdf-to-excel', icon: <FaFileExcel /> },
        { name: 'Word to PDF', path: '/word-to-pdf', icon: <FaExchangeAlt /> }
      ]
    },
    {
      name: 'Image Tools',
      icon: <FaImage size={24} />,
      tools: [
        { name: 'Compress Image', path: '/compress-image', icon: <FaImage /> },
        { name: 'Remove Background', path: '/remove-bg', icon: <FaImage /> }
      ]
    },
    {
      name: 'Text Tools',
      icon: <FaFont size={24} />,
      tools: [
        { name: 'Lorem Ipsum Generator', path: '/lorem-ipsum', icon: <FaFont /> },
        { name: 'Password Generator', path: '/password-generator', icon: <FaFont /> }
      ]
    },
    {
      name: 'Utilities',
      icon: <FaTools size={24} />,
      tools: [
        { name: 'Unit Converter', path: '/unit-converter', icon: <FaTools /> },
        { name: 'Currency Converter', path: '/currency-converter', icon: <FaTools /> }
      ]
    }
  ];

  return (
    <div className="dashboard">
      <h1>Free Web Tools</h1>
      <p className="subtitle">Your all-in-one solution for everyday digital tasks</p>
      
      <div className="tool-categories">
        {toolCategories.map((category, index) => (
          <div key={index} className="tool-category">
            <h2>
              {category.icon} {category.name}
            </h2>
            <div className="tool-list">
              {category.tools.map((tool, toolIndex) => (
                <div 
                  key={toolIndex} 
                  className="tool-item"
                  onClick={() => navigate(tool.path)}
                >
                  {tool.icon} {tool.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="about-section">
        <h2>About These Tools</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>PDF Conversion Made Easy</h3>
            <p>
              Convert documents between PDF, Word, and Excel formats effortlessly. 
              Perfect for students, professionals, and anyone who works with documents.
            </p>
          </div>
          
          <div className="feature-card">
            <h3>Image Optimization</h3>
            <p>
              Compress images to reduce file size without losing quality or remove 
              backgrounds to create professional-looking assets for your projects.
            </p>
          </div>
          
          <div className="feature-card">
            <h3>Text Generation</h3>
            <p>
              Generate placeholder text for your designs or create strong, secure 
              passwords to protect your online accounts.
            </p>
          </div>
          
          <div className="feature-card">
            <h3>Quick Conversions</h3>
            <p>
              Convert between different units of measurement or check real-time 
              currency exchange rates for your financial needs.
            </p>
          </div>
        </div>

        <div className="benefits">
          <h3>Why Use Our Tools?</h3>
          <ul>
            <li>100% Free - No hidden charges or subscriptions</li>
            <li>No Registration Required - Use instantly without signing up</li>
            <li>Privacy Focused - Files are processed in your browser, not on our servers</li>
            <li>Mobile Friendly - Works perfectly on all devices</li>
            <li>No Watermarks - Get clean results every time</li>
          </ul>
        </div>

        <div className="how-it-works">
          <h3>How To Use</h3>
          <ol>
            <li>Select the tool you need from the categories above</li>
            <li>Upload your file or enter the required information</li>
            <li>Let the tool process your request (automatically in most cases)</li>
            <li>Download or copy your result</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
