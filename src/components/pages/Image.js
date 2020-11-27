import React from "react";
import AppTemplate from "../ui/AppTemplate";
import BackArrow from "../../icons/icon-arrow-thick-left-circle.svg";
import { Link } from "react-router-dom";
import LeftChevron from "../../icons/icon-cheveron-down.svg";
import RedX from "../../icons/icon-close.svg";
import classnames from "classnames";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import actions from "../../store/actions";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagText: "",
    };
  }

  function deleteTag() {
    const deletedTag = this.props.selectedTag.tag;
    const cards = this.props.photo.tags;
    // const filteredCards = without(cards, deletedCard);
    console.log("deleted tag", deletedTag);
    // this.props.dispatch({
    //   type: actions.STORE_SELECTED_TAG,
    //   payload: this.props.tag,
    // });
    // if (filteredCards[this.props.queue.index] === undefined) {
    //    this.props.history.push("/review-empty");
    // } else {
    //    this.props.history.push("/review-imagery");
    // }
  }

  // function goToCollection() {
  //   console.log("Going to collection");
  //   props.dispatch({
  //     type: actions.STORE_SELECTED_COLLECTION,
  //     payload: props.collection,
  //   });
  //   props.history.push("/collection");
  // }

  checkHasInvalidCharCount() {
    if (
      this.state.tagText.length > MAX_CARD_CHARS ||
      this.state.tagText.length === 0
    ) {
      return true;
    } else return false;
  }

  setTagText(e) {
    this.setState({ tagText: e.target.value });
  }
  render() {
    console.log("props on image page", this.props.photo);
    const photo = this.props.photo;
    console.log("tag", this.props.tag);
    return (
      <AppTemplate>
        <div className="row">
          <div className="col mt-6 mb-n2">
            <Link to="/collection" className="collection-link">
              <img
                src={BackArrow}
                width="20px"
                className="mb-1 primary"
                alt=""
              />
              Back to collection
            </Link>
          </div>
        </div>
        {/* <!-- Main Image--> */}

        <div className="row">
          <div className="d-flex justify-content-center mt-5">
            <div className="col-2 col-md-1 align-self-center">
              <img
                src={LeftChevron}
                width="100%"
                id="rotate-left"
                alt="left chevron"
              />
            </div>
            <div className="col-8 col-md-10">
              <div>
                <img
                  src={photo.url}
                  className="img-fluid"
                  alt=""
                  key={photo.id}
                />
              </div>
            </div>

            <div className="col-2 col-md-1 align-self-center">
              <img
                src={LeftChevron}
                width="100%"
                id="rotate-right"
                alt="right chevron"
              />
            </div>
          </div>
        </div>
        {/* <!-- Input--> */}
        <div className="row">
          <div className="col-12 mt-5">
            <p className="text-pimary">
              Please log in to begin tagging photos.
            </p>
            <Link to="/log-in" className="btn btn-primary">
              Log in
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5">
            <p className="text-primary">Type a tag then press enter.</p>
            <input
              className="form-control form-control-sm mt-3"
              type="text"
              placeholder="Add a tag"
              id="tagText"
              onChange={(e) => this.setTagText(e)}
            />
          </div>
        </div>
        <p className="float-right mt-2 mb-0 text-muted">
          <span
            className={classnames({
              "text-danger": checkIsOver(this.state.tagText, MAX_CARD_CHARS),
            })}
          >
            {this.state.tagText.length}/{MAX_CARD_CHARS}
          </span>
        </p>

        <div className="row">
          <div className="col-12">
            <div className="clearfix"></div>

            {photo.tags.map((tag) => {
              return (
                <div className="d-inline-flex">
                  <p className="tag-text mt-3" key={tag.id} tag={tag.name}>
                    {tag.name}
                  </p>
                  <button
                    to=""
                    width="20px"
                    className="btn"
                    onClick={() => {
                      this.deleteTag();
                    }}
                  >
                    <img
                      src={RedX}
                      width="20px"
                      alt="delete"
                      className="ml-n3"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </AppTemplate>
    );
  }
}
function mapStateToProps(state) {
  return {
    photo: state.selectedPhoto,
    selectedTag: state.selectedTag,
  };
}

export default withRouter(connect(mapStateToProps)(Image));
