import React from "react";
import "./Joke.css";

/* Before Hooks */
class Joke extends React.Component {
  constructor(props){
    super(props);
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }
  voteUp = () => this.props.vote(this.props.id, +1);
  voteDown = () => this.props.vote(this.props.id, -1);
  render(){
    return (
      <div className="Joke">
          <div className="Joke-votearea">
            <button onClick={this.voteUp}>
              <i className="fas fa-thumbs-up"/>
            </button>
            <button onClick={this.voteDown}>
              <i className="fas fa-thumbs-down"/>
            </button>
          </div>
          {this.props.votes}
          <div className="Joke-text">{this.props.text}</div>
      </div>
    )
  }
}



/* After Hooks */
function ModernJoke({ vote, votes, text, id }) {
  const upVote = () => vote(id, +1);
  const downVote = () => vote(id, -1);

  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={upVote}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={downVote}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
}

export default Joke;
