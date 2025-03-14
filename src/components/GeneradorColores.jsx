function GeneradorColores() {
  const [palette, setPalette] = useState([]);
  const [model, setModel] = useState("default");
  const [inputColors, setInputColors] = useState(["N", "N", "N", "N", "N"]); // Default input
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const colormindUrl = "http://colormind.io/api/";

  const fetchColorScheme = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(colormindUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: model,
          input: inputColors,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch color scheme.");
      }

      const data = await response.json();
      setPalette(data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  console.log(JSON.stringify({ model: model, input: inputColors }));

  const handleInputChange = (index, value) => {
    const updatedInputColors = [...inputColors];
    if (value.trim() === "") {
      updatedInputColors[index] = "N"; // Reset to 'N' for blanks
    } else {
      updatedInputColors[index] = value.split(",").map(Number); // Convert to RGB array
    }
    setInputColors(updatedInputColors);
  };
  console.log(inputColors);
  console.log(palette);

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Colormind API - Color Scheme Generator</h1>

        <div style={{ marginBottom: "20px" }}>
          <label>
            Model:
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              style={{
                marginLeft: "10px",
                padding: "5px",
                fontSize: "16px",
              }}>
              <option value="default">Default</option>
              <option value="ui">UI</option>
              <option value="makoto_shinkai">Makoto Shinkai</option>
              <option value="metroid_fusion">Metroid Fusion</option>
              <option value="akira_film">Akira Film</option>
              <option value="flower_photography">Flower Photography</option>
            </select>
          </label>
        </div>

        <div>
          {inputColors.map((color, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <label>
                Color {index + 1} (RGB, e.g., 255,255,255):
                <input
                  type="text"
                  placeholder="N for random"
                  value={color === "N" ? "" : color.join(",")}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px",
                    width: "200px",
                    fontSize: "14px",
                  }}
                />
              </label>
            </div>
          ))}
        </div>

        <button
          onClick={fetchColorScheme}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}>
          Generate Color Scheme
        </button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
          }}>
          {palette.map((color, index) => (
            <div
              key={index}
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: `rgb(${color.join(",")})`,
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GeneradorColores;
