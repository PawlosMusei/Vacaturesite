import { useState } from "react";
import { useLoginContext } from "../hooks/useLoginContext";

const Loginform = () => {
  const { dispatch } = useLoginContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    // Log de inhoud van FormData om te controleren
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    try {
      const response = await fetch("http://localhost:4000/tasks", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to add task");
      }

      const data = await response.json();
      console.log("New task added:", data);

      setTitle("");
      setDescription("");
      setImage(null);
      setPreview(null);
      setError(null);
      dispatch({ type: "CREATE_NOTES", payload: data });
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to add task");
    }
  };

  return (
    <form className="NewForm" onSubmit={handleSubmit}>
      <h3>Add A New Task</h3>
      <label>Task Name:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Task Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <label>Task Image:</label>
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
          setPreview(URL.createObjectURL(e.target.files[0]));
        }}
      />
      {preview && <img src={preview} alt="Preview" />}
      <button type="submit">Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Loginform;
