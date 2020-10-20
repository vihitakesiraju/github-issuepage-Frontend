import React, { Component } from "react";

class Details extends Component {
  state = {};
  render() {
    let details = {
      ...this.props.details,
    };
    let renderVar;
    if (Object.keys(details).length > 0) {
      renderVar = (
        <div className="detailsCard">
          <ul className="list-group ">
            <li className="list-group-item">
              <b>Assignees</b>
              <p>
                {details.assignees.length > 0
                  ? JSON.stringify(details.assignees)
                  : "No One Assigned"}
              </p>
            </li>
            <li className="list-group-item">
              <b>Labels</b>
              <p>
                {details.assignees.labels > 0
                  ? JSON.stringify(details.labels)
                  : "None yet"}
              </p>
            </li>
            <li className="list-group-item">
              <b>Milestones</b>
              <p>
                {details.milestone ? (
                  <a href={details.milestone.html_url}>
                    {details.milestone.title}
                  </a>
                ) : (
                  "No Milestone"
                )}
              </p>
            </li>
            <li className="list-group-item">
              <b>Linked pull requests</b>{" "}
              <p>Successfully merging a pull request may close this issue.</p>{" "}
              <p>
                {details.assignees.length > 0
                  ? "Linked Pull Requests"
                  : "None yet"}
              </p>
            </li>
          </ul>
        </div>
      );
    }
    return <div>{renderVar}</div>;
  }
}

export default Details;
