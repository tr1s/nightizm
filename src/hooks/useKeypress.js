import { useEffect } from 'react';

/**
 * Ref:
 * https://www.caktusgroup.com/blog/2020/07/01/usekeypress-hook-react/
 * useKeyPress
 * @param {string} key - the name of the key to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */
export default function useKeypress(key, action) {
  useEffect(() => {
    function onKeyup(e) {
      console.log(e);
      if (e.key === key) action();
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, []);
}
