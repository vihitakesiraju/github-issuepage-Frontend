import React, { Component } from "react";
import Axios from "axios";
import Comments from "./commentsdetails";
import Details from "./detailscard";
import "./issuedetails.css";
class Issuedetails extends Component {
  state = {
    issueDetails: {},
    comments: [],
  };

  componentDidMount() {
    this.setState({ issueDetails: { ...this.props.location.state } }, () => {
      Axios.get(`${this.state.issueDetails.comments_url}`)
        .then((res) => {
          console.log(JSON.stringify(res.data));
          this.setState({ comments: [...res.data] });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
  render() {
    let renderVar = [];

    this.state.comments.map((comment) => {
      console.log("comments:" + JSON.stringify(comment));
      renderVar.push(<Comments commentData={comment} />);
    });

    return (
      <div className="issueDetails">
        <div className="issueheader">
          <h3 className="display-5">
            {this.state.issueDetails.title} #{this.state.issueDetails.number}
          </h3>
          <div class="dropdown-divider" />
        </div>

        <div className="commentfeed">
          <div>
            {/* {firstComment} */}
            <Comments commentData={this.state.issueDetails} />
            {/* {commentsFeed} */}
            {renderVar}
          </div>
          <div>
            <Details details={this.state.issueDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default Issuedetails;
