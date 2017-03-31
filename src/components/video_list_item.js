import React from 'react';

// usually pass 'props'
// passing {video} is essentially the same as passing in props
// then declaring: const video = props.video

const VideoListItem = ({video}) => {
    console.log(video);
    return <li> Video </li>
}

export default VideoListItem;
