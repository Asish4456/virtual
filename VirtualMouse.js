import React, { useEffect, useRef } from 'react';

const VirtualMouse = () => {
  // Initialize the 'detector' as a mutable ref
  const detector = useRef(null);

  useEffect(() => {
    // Set up or initialize 'detector' here
    detector.current = {
      position: { x: 0, y: 0 },
      isActive: true,
    };

    // Add event listeners for mouse movement (as an example)
    const handleMouseMove = (event) => {
      if (detector.current) {
        // Update the mouse position in the detector ref
        detector.current.position = {
          x: event.clientX,
          y: event.clientY,
        };
        console.log('Mouse Position:', detector.current.position);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array, so this effect runs only once on mount

  return (
    <div>
      <h2>Virtual Mouse Tracker</h2>
      <p>
        Current mouse position: X: {detector.current?.position?.x}, Y:{' '}
        {detector.current?.position?.y}
      </p>
    </div>
  );
};

export default VirtualMouse;
