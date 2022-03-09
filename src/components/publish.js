import { useState } from "react";

/*
POST https://graph.facebook.com/{page-id}/photos
    ?url={path-to-photo}
    &access_token={page-access-token}
 */
function Publish() {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1639682820083-7920dd14b687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  );
  const [token] = useState(
    "EAAM2NU7Qn1oBAB3Bt4ZASxo7h9EwqcZA0LMzwo1AnVH7XQajbfjp1lEjA4KVesYnXe3IwY4gSvDRF38E0CSZBJJTr7SezCgsK3MJxMJU1k9ilMHWuwKbthb6ZAJJ4WjKKMluyFVqCUTzN1ZBDDPi6TL0TgmlqGl51xyIk5XECObBUmSreyWLU66EIQZBMmDrUnBhuyy4XuFCUNNIwlZAdZCR"
  );
  const [message, setMessage] = useState("");
  async function sendImage() {
    console.log(image);
    const res = await fetch(
      `https://graph.facebook.com/757916544599335/photos?url=${image}&access_token=${token}`,
      {
        method: "POST",
      }
    );
    setImage("");
    console.log(await res.json());
  }
  async function sendPost() {
    //757916544599335
    const res = await fetch(
      `https://graph.facebook.com/757916544599335/feed?message=${message}&access_token=${token}`,
      {
        method: "POST",
      }
    );
    setMessage("");
    console.log(await res.json());
  }
  return (
    <div>
      <h2>Publicar imagen a pagina de facebbok </h2>

      <button onClick={sendImage}>send image</button>
      <input
        type="text"
        name="image"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      <button onClick={sendPost}>send post</button>
    </div>
  );
}
export default Publish;
