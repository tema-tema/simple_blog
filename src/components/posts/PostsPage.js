import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as postActions from '../../actions/postActions';

class PostsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      post: {title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const post = this.state.post;
    post.title = event.target.value;
    this.setState({post: post});
  }

  onClickSave() {
    this.props.dispatch(postActions.createPost(this.state.post));
  }

  postRow(post, index) {
    return <div key={index}>{post.title}</div>;
  }


  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.posts.map(this.postRow)}
        <h2>Add Post</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.post.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

PostsPage.propTypes = {
  dispatch: PropTypes.array.isRequired,
  posts: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}


export default connect(mapStateToProps)(PostsPage);

