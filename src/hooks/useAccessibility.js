import { useEffect, useRef } from 'react';

// Hook for managing focus
export function useFocusManagement() {
  const focusRef = useRef(null);

  const focusElement = () => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  };

  const trapFocus = (event) => {
    if (!focusRef.current) return;

    const focusableElements = focusRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.key === 'Tab') {
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }

    if (event.key === 'Escape') {
      focusRef.current.blur();
    }
  };

  return { focusRef, focusElement, trapFocus };
}

// Hook for keyboard navigation
export function useKeyboardNavigation(onEnter, onEscape) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'Enter':
          if (onEnter) onEnter(event);
          break;
        case 'Escape':
          if (onEscape) onEscape(event);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onEnter, onEscape]);
}

// Hook for reduced motion preference
export function useReducedMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return prefersReducedMotion;
}

// Hook for screen reader announcements
export function useScreenReader() {
  const announce = (message, priority = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  return { announce };
}

// Hook for skip links
export function useSkipLinks() {
  useEffect(() => {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Zum Hauptinhalt springen';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    return () => {
      if (document.body.contains(skipLink)) {
        document.body.removeChild(skipLink);
      }
    };
  }, []);
}

// Hook for color contrast checking
export function useColorContrast() {
  const checkContrast = (foreground, background) => {
    // Simplified contrast ratio calculation
    // In production, use a proper color contrast library
    const getLuminance = (color) => {
      // Convert hex to RGB and calculate luminance
      const rgb = parseInt(color.slice(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;
      
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    
    return {
      ratio,
      passAA: ratio >= 4.5,
      passAAA: ratio >= 7,
    };
  };

  return { checkContrast };
}
