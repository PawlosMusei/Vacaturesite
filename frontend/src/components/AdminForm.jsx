import { useState, useEffect } from "react";
import { useLoginContext } from "../hooks/useLoginContext";

const Loginform = () => {
  const { dispatch } = useLoginContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  // const [image, setImage] = useState();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
 
    const response = await fetch("http://localhost:4000/tasks", {
      method: "POST",
      body: formData,
    });
    const json = await response.json();
  
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setImage(null);
      setPreview(null);
      setError(null);
      console.log("new intership added", json);
      dispatch({ type: "CREATE_NOTES", payload: json });
    }
  };

  return (
    <form className="NewForm" onSubmit={handleSubmit}>
      <h3>Add A New Intership</h3>
      <label>Intership Name:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Intership description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <label>Intership image:</label>
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
          setPreview(URL.createObjectURL(e.target.files[0]));
        }}
      />
      {preview && <img src={preview} alt="Preview" />}
     
      <button onClick={handleSubmit}>Add Intership</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Loginform;
