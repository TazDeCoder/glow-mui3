import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  /** Content of the container element */
  children: React.ReactNode;
  /** Container element to render as parent
   * @default div
   */
  node?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = ({ children, node }) => {
  const [defaultNode] = useState(() => node || document.createElement('div'));

  useLayoutEffect(() => {
    if (defaultNode) {
      document.body.appendChild(defaultNode);
    }

    return () => {
      if (defaultNode) {
        document.body.removeChild(defaultNode);
      }
    };
  }, [node, defaultNode]);

  // @ts-ignore
  return createPortal(children, defaultNode);
};
