import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

export function Portal({ children, containerId = 'modal-root' }: PortalProps) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const portalRoot = document.getElementById(containerId);
    
    if (!portalRoot) {
      console.error(`[Portal] Container with id '${containerId}' not found! Falling back to document.body`);
    }
    
    const actualRoot = portalRoot || document.body;
    const el = document.createElement('div');
    el.setAttribute('data-portal-child', 'true');
    elRef.current = el;
    
    actualRoot.appendChild(el);
    setMounted(true);

    return () => {
      if (elRef.current && actualRoot.contains(elRef.current)) {
        actualRoot.removeChild(elRef.current);
      }
      setMounted(false);
    };
  }, [containerId]);

  // Wait for the portal element to be mounted before rendering
  if (!mounted || !elRef.current) {
    return null;
  }

  return createPortal(children, elRef.current);
}