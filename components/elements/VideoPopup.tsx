"use client";
import "@/node_modules/react-modal-video/css/modal-video.css";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function VideoPopup() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <a onClick={() => setOpen(true)} className="popup-youtube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 20.1957V3.80421C6 3.01878 6.86395 2.53993 7.53 2.95621L20.6432 11.152C21.2699 11.5436 21.2699 12.4563 20.6432 12.848L7.53 21.0437C6.86395 21.46 6 20.9812 6 20.1957Z" />
                </svg>
            </a>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
        </>
    );
}
