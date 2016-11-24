import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
    render() {
        const { post, i, comments } = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.thumbnail_src} alt={post.caption} className="grid-photo" />
                    </Link>

                    <CSSTransitionGroup 
                        transitionName="like"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <span key={post.likes.count} className="likes-heart">{post.likes.count}</span>
                    </CSSTransitionGroup>

                    <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                    <button onClick={this.props.increment.bind(null, i)} className="likes">&hearts; {post.likes.count}</button>
                    <Link className="button" to={`/view/${post.code}`}>
                        <span className="comment-count">
                            <span className="speech-bubble"></span>
                            {post.comments.count}
                        </span>
                        
                    </Link>
                    </div>
                    </figcaption>

                </div>
            </figure>
        )
    }

});

export default Photo;
