import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setOriginalImage(URL.createObjectURL(file));
    
    try {
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 800,
        useWebWorker: true
      };
      const compressedFile = await imageCompression(file, options);
      setCompressedImage(URL.createObjectURL(compressedFile));
    } catch (error) {
      console.error(error);
      alert('Error compressing image');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="tool-container">
      <h2>Image Compressor</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      
      {isLoading && <div className="loading">Processing...</div>}
      
      <div className="image-comparison">
        {originalImage && (
          <div className="image-box">
            <h3>Original</h3>
            <img src={originalImage} alt="Original" />
          </div>
        )}
        
        {compressedImage && (
          <div className="image-box">
            <h3>Compressed</h3>
            <img src={compressedImage} alt="Compressed" />
            <a href={compressedImage} download="compressed.jpg" className="download-btn">
              Download
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCompressor;
