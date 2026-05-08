import Youtube from "react-youtube";
import { motion } from "framer-motion";

/**
 * Styled YouTube video embed with card framing and caption.
 *
 * Props:
 *  - videoUrl  (string)   full YouTube URL (youtu.be or youtube.com/watch)
 *  - title     (string)   heading above the video
 *  - caption   (string)   optional text below the video
 */
const VideoEmbed = ({ videoUrl, title, caption }) => {
    /* Extract video ID from various YouTube URL formats */
    let videoId = "";
    if (videoUrl.includes("youtu.be/")) {
        videoId = videoUrl.split("youtu.be/")[1]?.split("?")[0];
    } else if (videoUrl.includes("watch?v=")) {
        videoId = videoUrl.split("watch?v=")[1]?.split("&")[0];
    }

    return (
        <motion.div
            className="pd-video-card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            {title && <h3 className="pd-video-title">{title}</h3>}
            <div className="pd-video-container">
                <Youtube
                    videoId={videoId}
                    className="pd-youtube"
                    opts={{ width: "100%", height: "100%", playerVars: { rel: 0 } }}
                />
            </div>
            {caption && <p className="pd-video-caption">{caption}</p>}
        </motion.div>
    );
};

export default VideoEmbed;
