import React from 'react';
import PropTypes from 'prop-types';

//create class component to Function component;
//Create remove button for remove photo received props from photoWall and show method create OnClick method passed props.onRemovePhoto(post)
const Photo = (props) => {
    const post = props.post
    return (
        <figure className="figure">
            <img className="photo-img" src={post.imageLink} alt={post.description}></img>
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button
                    className="remove-container"
                    onClick={() => {
                        props.onRemovePhoto(post)
                    }}>
                    Remove
                            </button>
            </div>
        </figure>
    )
};

Photo.propTypes = {
    post:PropTypes.object.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}

export default Photo;