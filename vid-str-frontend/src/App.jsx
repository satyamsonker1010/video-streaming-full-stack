function App() {
  return (
    <>
      <div style={{width:"100vw",display:"flex" , justifyContent:"center",alignItems:"center" , flexDirection:"column"}} className="App">
        <div>
        <h1>React Video Streaming Test</h1>
        <video controls width="640" height="360">
          <source
            src="http://localhost:3000/video/video_1.mkv"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
    </>
  );
}

export default App;
