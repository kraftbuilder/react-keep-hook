import * as React from 'react';
export interface UseKeepOptions {
    /**
     * Optional condition function. If it returns false, dragging won't start.
     */
    condition?: (event: React.MouseEvent | MouseEvent) => boolean;
    /**
     * Triggered on mousedown (if condition is true).
     */
    onStart: (event: React.MouseEvent) => void;
    /**
     * Triggered on mousemove while the mouse is down.
     */
    onMove: (event: MouseEvent) => void;
    /**
     * Triggered on mouseup.
     */
    onStop: (event: MouseEvent) => void;
}
/**
 * useKeep
 * A custom hook to manage mouse interactions: mousedown, mousemove, mouseup.
 */
export default function useKeep({ condition, onStart, onMove, onStop, }: UseKeepOptions): (downEvent: React.MouseEvent) => void;
//# sourceMappingURL=useKeep.d.ts.map