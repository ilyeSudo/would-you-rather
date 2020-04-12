import React, { Component } from "react";
import { Link } from "react-router-dom";

class QuestionActionButton extends Component {
  state = {};

  handleButton = () => {
    const { questionType, qId, source } = this.props;

    if (source === "dashboard") {
      return {
        pathname: `/questions/${qId}`,
        state: { questionType, qId },
      };
    }
    if (source === "poll" && questionType === "unanswred") {
      // submit answer
      console.log("Submit button here");
    }
    if (source === "poll" && questionType === "answred") {
      return "/";
    }
    return null;
  };

  render() {
    const { questionType, qId, source } = this.props;

    const buttonText =
      source === "poll"
        ? questionType === "unanswred"
          ? "Submit"
          : "Go Back"
        : questionType === "unanswred"
        ? "Answer Poll"
        : "View Results";

    const buttonBgColor = questionType === "unanswred" ? "green" : "orange";

    return !(source === "poll" && questionType === "unanswred") ? (
      <Link className="ui two buttons" to={this.handleButton}>
        <button className={"ui full button " + buttonBgColor}>
          {buttonText}
        </button>
      </Link>
    ) : null;
  }
}
export default QuestionActionButton;
