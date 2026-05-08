import { useState, useCallback } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

/**
 * Interactive image gallery with lightbox.
 *
 * Props:
 *  - images   ({ src, alt }[])  array of image objects
 *  - columns  (number)          grid columns, default 2
 */
const ImageGallery = ({ images = [], columns = 2 }) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openAt = useCallback((i) => {
        setIndex(i);
        setOpen(true);
    }, []);

    const slides = images.map((img) => ({ src: img.src }));

    return (
        <>
            <div
                className="pd-gallery"
                style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
            >
                {images.map((img, i) => (
                    <motion.div
                        className="pd-gallery-item"
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        onClick={() => openAt(i)}
                    >
                        <img src={img.src} alt={img.alt || ""} />
                        <div className="pd-gallery-zoom">🔍</div>
                    </motion.div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={slides}
                styles={{
                    container: { backgroundColor: "rgba(0, 0, 0, 0.92)" },
                }}
            />
        </>
    );
};

export default ImageGallery;
