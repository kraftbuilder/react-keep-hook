import * as React from 'react';
/**
 * useKeep
 * A custom hook to manage mouse interactions: mousedown, mousemove, mouseup.
 */
export default function useKeep({ condition, onStart, onMove, onStop, }) {
    const isDownRef = React.useRef(false);
    const handleMouseDown = React.useCallback((downEvent) => {
        if (condition && !condition(downEvent))
            return;
        isDownRef.current = true;
        onStart(downEvent);
        const handleMouseMove = (moveEvent) => {
            if (isDownRef.current) {
                onMove(moveEvent);
            }
        };
        const handleMouseUp = (upEvent) => {
            if (isDownRef.current) {
                isDownRef.current = false;
                onStop(upEvent);
            }
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }, [condition, onStart, onMove, onStop]);
    return handleMouseDown;
}
