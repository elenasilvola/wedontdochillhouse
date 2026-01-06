import React from "react";
import '../styles/index.css';
import { ReactComponent as LineSVG } from '../assets/backgroundLines.svg';


const VideoCard = ( {video, videoRef, onVideoClick, withBackground} ) => {
    return (
        <div className="video-card-container">
            <div className="video-card">
            {withBackground && (
                <div>
                    <div className="svg-background"><LineSVG /></div>
        
                </div>
            )}
            <div className="video-player" onClick={onVideoClick}>
                <video ref={videoRef} controls={false} width="100%" >
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="text-container">
                <div className="title">{video.title}</div>
                <div className="description">
                    <div className="location">{video.city}, {video.country}</div>
                    <div className="genre">{video.genre.join(', ')}</div>
                </div>
        </div>
        </div>
        </div>
    );
}
export default VideoCard;   