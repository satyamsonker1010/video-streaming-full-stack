function App() {
  return (
    <>
      <div style={{width:"100vw",display:"flex" , justifyContent:"center",alignItems:"center" , flexDirection:"column"}} className="App">
        <div>
        <h1>React Video Streaming Test</h1>
        <video controls width="640" height="360">
          <source
            src="https://video.chunkurl.com/video/dj-wale-gana.mp4"
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
