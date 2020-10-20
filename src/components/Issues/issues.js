import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import cookie from "react-cookies";
import ReactPaginate from "react-paginate";
import "./issues.css";
//import Pagination from "../Pagination/pagination";
import Issue from "./issue";
import Axios from "axios";

/////////////////////
class Issues extends Component {
  state = {
    issue_list: [],
    data: [],
    comments: [],
    isLoading: false,
    currentPage: 0,
    issuesperpage: 10,
    displaylist: [],
    firstissue: 0,
  };
  componentDidMount = () => {
    this.setState({ isLoading: false }, async () => {
      await Axios.get(`https://api.github.com/repos/walmartlabs/thorax/issues`)
        .then((res) => {
          // console.log("data" + JSON.stringify(res.data));
          this.setState({
            issue_list: res.data,
            pagecount: Math.ceil(res.data.length / this.state.issuesperpage),
          });
        })
        .then(() => {
          this.handledata();
        })
        .catch((e) => {
          console.log(e);
        });
    });
  };

  handledata = () => {
    //console.log("handledata" + JSON.stringify(this.state.issue_list));
    const data_list = this.state.issue_list.slice(
      this.state.firstissue,
      this.state.firstissue + this.state.issuesperpage
    );
    //console.log("data_list handle data"+data_list[0])

    const d_list = data_list.map((data) => {
      //console.log("data_list d_list")
      let rec = {
        data: data,
        props: this.props,
      };
      return (
        <span className="list-group-item list-group-item-action">
          <Issue issue_list={rec} />
        </span>
      );
    });
    //console.log("data in d_list"+JSON.stringify(data_list[0]))
    this.setState({
      displaylist: d_list,
    });
    //console.log("data_list" + data_list);
    //console.log(this.state.pagecount);
  };

  handlepageselect = (e) => {
    console.log(e);
    const spage = e.selected;
    const firstissue = spage * this.state.issuesperpage;
    this.setState(
      {
        currentPage: spage,
        firstissue: firstissue,
      },
      () => {
        this.handledata();
      }
    );
  };

  render() {
    let issuelist = this.state.displaylist.map((issue) => {
      return (
        <span className="list-group-item list-group-item-action">
          <Issue issue_list={issue} />
        </span>
      );
      console.log("issuelist" + issuelist);
    });

    return (
      <div className="issueListPage">
        <div>{this.state.displaylist}</div>

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pagecount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          // OnClick={this.handlepageselect}
          onPageChange={this.handlepageselect}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}
export default Issues;

// if (displaylist.length > 0) {
//   issuelist = displaylist.map((issue) => {
//     console.log("issue is" + issue);
//     let rec = {
//       issue: issue,
//       props: this.props,
//     };
//     return <Issue props={rec} />;
//   });
// }

// if (this.state.issue_list.length > 0) {
//   issuelist = this.state.issue_list.map((issue) => {
//     console.log("issue is" + issue);
//     let rec = {
//       issue: issue,
//       props: this.props,
//     };
//     return <Issue props={rec} />;
//   });
// }
//console.log("issuelist" + issuelist);

//constructor(props) {
//super(props);

//   const issue_list = [
//     {
//       id: 0,
//       text: "Progress bar when run `npm run build`",
//       isOpen: true,
//       number: "#1234",
//       badges: [
//         {
//           text: "issue: bug report",
//           color: "orange",
//         },
//         {
//           text: "issue: proposal",
//           color: "yellow",
//         },
//       ],
//     },
//     {
//       id: 1,
//       text: "Progress bar when run `npm run build`",
//       isOpen: true,
//       number: "#1235",
//       badges: [
//         {
//           text: "issue: bug report",
//           color: "orange",
//         },
//         {
//           text: "issue: proposal",
//           color: "yellow",
//         },
//       ],
//     },
//   ];
//   this.state = { issue_list };
// }

//text={issue.text}
//            isOpen={issue.isOpen}
//          number={issue.number}
//        badges={issue.badges}
