import { motion } from "framer-motion";
import starfieldImg from "../assets/img/Logos/starfield.png";
import moonImg from "../assets/img/Logos/moon.png";

/**
 * Atmospheric background layers for different pages.
 *
 * Props:
 *  - variant  ("home" | "allwork" | "about")
 */
const BackgroundAtmosphere = ({ variant = "home" }) => {
    if (variant === "home") {
        return (
            <div className="atmo" aria-hidden="true">
                {/* Starfield */}
                <motion.div
                    className="atmo-layer atmo-starfield"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundImage: `url(${starfieldImg})` }}
                />
                {/* Moon */}
                <motion.div
                    className="atmo-layer atmo-moon"
                    animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
                    transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img src={moonImg} alt="" />
                </motion.div>
                {/* Floating logos */}
                <div className="atmo-layer atmo-logos atmo-logos--home">
                    <motion.img
                        src="https://cdn.simpleicons.org/nasa/ffffff"
                        alt=""
                        className="atmo-logo"
                        style={{ top: "15%", left: "8%" }}
                        animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.img
                        src="https://cdn.simpleicons.org/unity/ffffff"
                        alt=""
                        className="atmo-logo"
                        style={{ top: "60%", left: "5%" }}
                        animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    />
                    <motion.img
                        src="https://cdn.simpleicons.org/unrealengine/ffffff"
                        alt=""
                        className="atmo-logo"
                        style={{ top: "25%", right: "6%" }}
                        animate={{ y: [0, -12, 0], rotate: [0, -4, 0] }}
                        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    />
                    <motion.img
                        src="https://cdn.simpleicons.org/python/ffffff"
                        alt=""
                        className="atmo-logo"
                        style={{ top: "70%", right: "10%" }}
                        animate={{ y: [0, 8, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 7 }}
                    />
                    <motion.img
                        src="https://cdn.simpleicons.org/react/ffffff"
                        alt=""
                        className="atmo-logo atmo-logo--sm"
                        style={{ top: "45%", left: "18%" }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                    <motion.img
                        src="https://cdn.simpleicons.org/cplusplus/ffffff"
                        alt=""
                        className="atmo-logo atmo-logo--sm"
                        style={{ top: "35%", right: "18%" }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    />
                </div>
            </div>
        );
    }

    if (variant === "allwork") {
        return (
            <div className="atmo" aria-hidden="true">
                {/* Starfield */}
                <motion.div
                    className="atmo-layer atmo-starfield atmo-starfield--dim"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundImage: `url(${starfieldImg})` }}
                />
                {/* Subtle moon — bottom right corner */}
                <motion.div
                    className="atmo-layer atmo-moon atmo-moon--corner"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img src={moonImg} alt="" />
                </motion.div>
            </div>
        );
    }

    if (variant === "about") {
        return (
            <div className="atmo" aria-hidden="true">
                {/* Starfield — very subtle */}
                <motion.div
                    className="atmo-layer atmo-starfield atmo-starfield--faint"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundImage: `url(${starfieldImg})` }}
                />
                {/* Floating org logos */}
                <div className="atmo-layer atmo-logos atmo-logos--about">
                    <motion.img
                        src="https://cdn.simpleicons.org/nasa/ffffff"
                        alt=""
                        className="atmo-logo atmo-logo--lg"
                        style={{ top: "10%", right: "5%" }}
                        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.img
                        src="https://cdn.simpleicons.org/doi/ffffff"
                        alt=""
                        className="atmo-logo"
                        style={{ top: "50%", left: "3%" }}
                        animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
                        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    />
                    <motion.img
                        src="https://cdn.simpleicons.org/arduino/ffffff"
                        alt=""
                        className="atmo-logo atmo-logo--sm"
                        style={{ top: "75%", right: "8%" }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 6 }}
                    />
                    <motion.img
                        src="https://cdn.simpleicons.org/blender/ffffff"
                        alt=""
                        className="atmo-logo atmo-logo--sm"
                        style={{ top: "30%", left: "12%" }}
                        animate={{ y: [0, 8, 0], rotate: [0, 4, 0] }}
                        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                </div>
            </div>
        );
    }

    return null;
};

export default BackgroundAtmosphere;
