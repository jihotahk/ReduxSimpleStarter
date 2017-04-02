import React from 'react';

// usually pass 'props'
// passing {video} is essentially the same as passing in props
// then declaring: const video = props.video

const VideoListItem = ({video, onVideoSelect }) => {

    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={ () => onVideoSelect(video)} className="list-group-item">
            <div className="video-list-media media">

                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading"> {video.snippet.title} </div>
                </div>

            </div>
        </li>
    );
}

export default VideoListItem;
