import React, { useState } from 'react';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [roomDescription, setRoomDescription] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [history, setHistory] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setRoomDescription(e.target.value);
  };

  const handleDesignButtonClick = () => {
    console.log('Design button clicked');
  };

  const handleRoomSubmit = () => {
    if (roomDescription.trim() !== '') {
      setHistory([...history, roomDescription]);
      setRoomDescription('');
    }
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleRoomTypeChange = (e) => {
    setSelectedRoomType(e.target.value);
  };

  const handleUploadButtonClick = () => {
    console.log('Upload button clicked');
  };

  return (
    <>
      <div className="sidebar">
        <h2>Interior Design</h2>
        <div className="sidebar-links" id="home-link">
          <box-icon name='home' color="white"></box-icon>
          <span className="link-text">Home</span>
        </div>
        <div className="history-container">
    {history.map((item, index) => (
      <div className="history-entry" key={index}>{item}</div>
    ))}
    </div>
        <div className="sidebar-links" id="history-link">
          <box-icon name='history' color="white"></box-icon>
          <span className="link-text">History</span>
          {history.slice(0).reverse().map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
      <div className="navigation-bar">
        <div className="nav-descr">
          <h1>Upload A Photo Or Image</h1>
          <p>Enhance the appearance of your space by effortlessly uploading a photo or image of the room you wish to transform.</p>
        </div>
        <div>
          <button className="design-button" onClick={handleDesignButtonClick}>Design This Room</button>
        </div>
      </div>
      <div className="text-input">
        <input type="text" placeholder="Describe your room..." value={roomDescription} onChange={handleDescriptionChange} />
        <button type="submit" onClick={handleRoomSubmit}>Submit</button>
      </div>
      <div className="main-content">
        <select className="dropdown" id="model-dropdown" value={selectedModel} onChange={handleModelChange}>
          <option value="">Model</option>
          <option value="storey">Storey</option>
          <option value="modern">Modern</option>
          <option value="traditional">Traditional</option>
        </select>
        <select className="dropdown" id="room-dropdown" value={selectedRoomType} onChange={handleRoomTypeChange}>
          <option value="">Room Type</option>
          <option value="Sittingroom">Sittingroom</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Kitchen">Kitchen</option>
        </select>
        <div className="func">
          <div className="upload-container">
            <input type="file" id="image-upload" onChange={handleFileChange} />
            <label htmlFor="image-upload" className="upload-label">Click To Upload</label>
          </div>
          <div className="output-container">
            <div className="output-image-container">
              <p>AI Generated Output Goes Here</p>
              <img src="" alt="" id="output-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;