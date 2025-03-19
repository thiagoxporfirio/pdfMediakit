const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
      <iframe
        src="/media_kit.pdf"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default App;
