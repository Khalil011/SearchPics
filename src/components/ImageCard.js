import React from "react";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 150);
    this.setState({ spans });
    console.log(this.imageRef.current.clientHeight);
  };
  render() {
    return (
      <div
        className="ui card"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img
          alt=""
          key={this.props.image.id}
          ref={this.imageRef}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}
export default ImageCard;
