import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./issuepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faComments,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";

class Issue extends Component {
  state = {
    issue_list: {},
  };
  componentDidMount() {
    // console.log("issuelist.number" + this.props.issue_list.number);
    this.setState({ issue_list: this.props.issue_list.issue_list });
  }
  render() {
    // console.log(this.props)
    //console.log("issue render" + JSON.stringify(this.props.props.issue));
    const issuedata = this.props.issue_list.data;
    // console.log("issuedata" + JSON.stringify(issuedata));

    //console.log("issuedata from render"+JSON.stringify(issuedata.number))
    let userdetails, userlogin;
    if (this.props.issue_list.user) {
      userdetails = { ...this.state.issue_list.user };
      userlogin = userdetails.login;
    }
    let month, date;
    if (this.props.issue_list) {
      date = new Date(this.props.issue_list.created_at);
    }
    return (
      <div className="issueContainer">
        <h5>
          <span className="status">
            {issuedata.state === "open" ? (
              <FontAwesomeIcon icon={faExclamationCircle} color="green" />
            ) : (
              <FontAwesomeIcon icon={faExclamationCircle} color="red" />
            )}
          </span>
          <Link
            className="Link"
            to={{
              pathname: `/issues/issue/${issuedata.number}`,
              state: {
                ...issuedata,
              },
            }}
            style={{ color: "black" }}
          >
            {issuedata.title}
          </Link>
          &nbsp;
          {issuedata.labels.map((badge) => {
            return (
              <span
                key={badge.id}
                style={{
                  backgroundColor: `#${badge.color}`,
                  fontSize: "15px",
                  color: "",
                }}
                className="badge"
              >
                {badge.name}
              </span>
            );
          })}
          &emsp; &emsp;&emsp;
          <span>
            {issuedata.comments > 0 ? (
              <Link
                className="Link"
                to={{
                  pathname: `/issues/issue/${issuedata.number}`,
                  state: {
                    ...issuedata,
                  },
                }}
                style={{ color: "black" }}
              >
                <FontAwesomeIcon icon={faComments} color="gray" />
              </Link>
            ) : (
              <FontAwesomeIcon icon={faComments} color="gray" />
            )}{" "}
          </span>
          {issuedata.comments}
        </h5>

        <p style={{ fontSize: "20px", display: "flex", fontFamily: "times" }}>
          #{issuedata.number} opened on {issuedata.created_at.split("T")[0]} by{" "}
          {issuedata.user.login}{" "}
        </p>
      </div>
    );
  }
}

export default Issue;
