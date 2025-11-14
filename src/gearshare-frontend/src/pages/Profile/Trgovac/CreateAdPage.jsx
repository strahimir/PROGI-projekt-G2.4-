import { useState } from "react";
import { useNavigate } from "react-router";

function CreateAdPage({ ads, setAds }) {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
   // if (image) formData.append("image", image);

    try {
      const response = await fetch("http://localhost:8080/api/listings/seller/selleruuid", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Greška pri dodavanju oglasa");

      const newAd = await response.json();
      setAds([...ads, newAd]); // ažuriramo state
      navigate("/profile1"); // vraćamo se na profil trgovca
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Kreiraj novi oglas</h1>
      <form className="create-ad-form" onSubmit={handleSubmit}>
        <label>
          Slika proizvoda:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        <label>
          Naziv proizvoda:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Opis proizvoda:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label>
          Cijena:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="submit-ad-button">
          Kreiraj oglas
        </button>
      </form>
    </div>
  );
}

export default CreateAdPage;
