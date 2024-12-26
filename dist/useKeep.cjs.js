'use strict';

var React = require('react');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

/**
 * useKeep
 * A custom hook to manage mouse interactions: mousedown, mousemove, mouseup.
 */
function useKeep({ condition, onStart, onMove, onStop, }) {
    const isDownRef = React__namespace.useRef(false);
    const handleMouseDown = React__namespace.useCallback((downEvent) => {
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

module.exports = useKeep;
//# sourceMappingURL=useKeep.cjs.js.map
