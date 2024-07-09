import React, { useRef, useState } from 'react';
import './Draggable.css';

const Draggable = ({ children }) => {
    const dragRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const onMouseDown = (e) => {
        const startX = e.clientX - position.x;
        const startY = e.clientY - position.y;

        const onMouseMove = (e) => {
            setPosition({
                x: e.clientX - startX,
                y: e.clientY - startY
            });
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    return (
        <div
            ref={dragRef}
            className="draggable"
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
            <div className="title-bar" onMouseDown={onMouseDown}>
                Title
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default Draggable;
