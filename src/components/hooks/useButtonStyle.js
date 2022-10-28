import { useEffect, useState } from 'react';

const useButtonStyle = ({
  primary, outline, danger, disabled, avatar, uppercase, small, ...props
}) => {
  const [styles, setStyles] = useState({ main: '', uppercase: '' });

  useEffect(() => {
    const handleSize = (size) => {
      switch (size) {
        case 'small':
          return 'text-xs px-4 py-1';
        case 'big':
          return 'text-lg px-5 py-2';
        default:
          return 'text-xs sm:text-sm px-5 py-2';
      }
    };
    const handleStyle = () => {
      if (primary) {
        return `bg-blue-main-500 text-white rounded-full sm:font-semibold border border-blue-main-500 hover:bg-blue-main-600 hover:opacity-80 ${handleSize(props.size)}`;
      }
      if (outline) {
        if (outline === 'blue') {
          return `bg-transparent text-cyan-600 rounded-full font-semibold border border-cyan-600 hover:opacity-80 ${handleSize(props.size)}`;
        }
        if (outline === 'gray') {
          return `bg-transparent text-gray-600 rounded-full font-semibold border border-gray-600 hover:opacity-80 ${handleSize(props.size)}`;
        }
        if (outline === 'danger') {
          return `bg-transparent text-rose-600 rounded-full font-semibold border border-rose-600 hover:opacity-80 ${handleSize(props.size)}`;
        }
        return `bg-white text-gray-600 rounded-full font-semibold border border-gray-600 hover:opacity-80 ${handleSize(props.size)}`;
      }
      if (danger) {
        return 'bg-rose-600 text-white text-sm rounded-full font-semibold hover:opacity-80';
      }
      if (disabled) {
        return `bg-gray-600 rounded-full sm:font-semibold text-white cursor-auto ${handleSize(props.size)}`;
      }
      if (avatar) {
        return 'm-1 mr-2 w-14 h-14 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white uppercase font-semibold';
      }
      return 'text-gray-600 hover:text-cyan-600 hover:opacity-80';
    };

    const handleUppercase = () => {
      if (uppercase === undefined) {
        return '';
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
  }, [primary, outline, danger, disabled, avatar, uppercase, props.size]);

  return [styles];
};

export default useButtonStyle;
