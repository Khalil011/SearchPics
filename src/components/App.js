import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

//class App extends React.Component {
const App = () => {
  //state = { images: [] };
  const [images, setImages] = useState([]);

  const onTermSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization: "Client-ID ukGqb0UOQm0s22iWvrq6dWcQqo_NqIqjzaOO3QH2IvQ"
      }
    });
    //this.setState({ images: response.data.results });
    setImages(response.data.results);
  };

  //render() {
  return (
    <div className="ui-container" style={{ marginTop: "20px" }}>
      <SearchBar onClick=/*{this.onTermSubmit} */ {onTermSubmit} />
      <ImageList images=/*{this.state.images}*/ {images} />
    </div>
  );
  //}
};
export default App;
