import React, { Component } from "react";
import "./commentdetails.css";
class Comments extends Component {
  state = {
    commentData: {},
  };
  componentDidMount() {
    this.setState({ commentData: { ...this.props.commentData } });
  }
  render() {
    // console.log(this.props)
    let renderComment;
    let month, date;
    let commentData = { ...this.props.commentData };
    if (commentData) {
      date = new Date(commentData.created_at);
      month = date.toLocaleString("default", { month: "short" });
    }
    //console.log("commentData" + JSON.stringify(commentData.body));
    if (commentData && commentData.user) {
      // console.log(commentData.number)
      renderComment = (
        <div>
          <div className="card border-light  cardBorder">
            <div className="card-header commentCardHeader">
              <img
                src={commentData.user.avatar_url}
                className="avatarImage"
                alt="avatarIcon"
              />
              <b>
                {" "}
                <a href={commentData.user.html_url}>
                  {" "}
                  <p>{commentData.user.login} </p>
                </a>
              </b>
              <p>
                {" "}
                commented on {month} {date.getDate()}, {date.getFullYear()}
              </p>
            </div>
            <div className="card-body text-secondary">
              {/* <h5 class="card-title">Secondary card title</h5> */}
              <p className="card-text">{commentData.body}</p>
            </div>
          </div>
        </div>
      );
    }

    return <div>{renderComment}</div>;
  }
}

export default Comments;
