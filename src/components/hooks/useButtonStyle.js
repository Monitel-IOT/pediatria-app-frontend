import { useEffect, useState } from 'react';

const useButtonStyle = ({
  primary, outline, danger, disabled, uppercase,
}) => {
  const [styles, setStyles] = useState({ main: '', uppercase: '' });

  useEffect(() => {
    const handleStyle = () => {
      if (primary) {
        return 'bg-blue-main-500 text-white text-sm rounded-full font-semibold hover:bg-blue-main-600 hover:opacity-80';
      }
      if (outline) {
        if (outline === 'blue') {
          return 'bg-white text-cyan-600 text-sm rounded-full font-semibold border border-cyan-600 hover:opacity-80';
        }
        if (outline === 'danger') {
          return 'bg-white text-rose-600 text-sm rounded-full font-semibold border border-rose-600 hover:opacity-80';
        }
        return 'bg-white text-gray-600 text-sm rounded-full font-semibold border border-gray-600 hover:opacity-80';
      }
      if (danger) {
        return 'bg-rose-600 text-white text-sm rounded-full font-semibold hover:opacity-80';
      }
      if (disabled) {
        return 'bg-gray-600 text-sm rounded-full font-semibold text-white cursor-auto';
      }
      return 'text-gray-600 hover:text-cyan-600 hover:opacity-80';
    };

    const handleUppercase = () => {
      if (uppercase === undefined) {
        return 'uppercase';
      }
      if (!uppercase) {
        return '';
      }
      return 'uppercase';
    };

    setStyles({
      main: handleStyle(),
      uppercase: handleUppercase(),
    });
  }, [primary, outline, danger, disabled, uppercase]);

  return [styles];
};

export default useButtonStyle;
