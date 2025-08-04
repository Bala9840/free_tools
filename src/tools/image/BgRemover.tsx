import React, { useState, useRef } from 'react';

const BgRemover = () => {
  const [image, setImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
  };

  const removeBackground = () => {
    if (!image || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Simple background removal (white to transparent)
      for (let i = 0; i < data.length; i += 4) {
        if (data[i] > 200 && data[i+1] > 200 && data[i+2] > 200) {
          data[i+3] = 0; // Set alpha to 0 (transparent)
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setResultImage(canvas.toDataURL());
    };
    img.src = image;
  };

  return (
    <div className="tool-container">
      <h2>Background Remover</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={removeBackground} disabled={!image}>
        Remove Background
      </button>

      <div className="image-comparison">
        {image && (
          <div className="image-box">
            <h3>Original</h3>
            <img src={image} alt="Original" />
          </div>
        )}
        
        {resultImage && (
          <div className="image-box">
            <h3>Result</h3>
            <canvas ref={canvasRef} style={{display: 'none'}} />
            <img src={resultImage} alt="No Background" />
            <a href={resultImage} download="no-bg.png" className="download-btn">
              Download
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BgRemover;
