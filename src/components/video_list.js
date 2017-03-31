import React from 'react';
import VideoListItem from './video_list_item';

// props (video list object) sent down from parent App
// in <VideoList videos = {this.state.videos} />
// in functional component, props passed as arguments. in classes, available as this.props
const VideoList = (props) => {

    // map over props.videos to take each video and create a videolistitem object,
    // passing video as argument
    const videoItems = props.videos.map(video=>{
        return <VideoListItem key={video.etag} video={video} />;
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
