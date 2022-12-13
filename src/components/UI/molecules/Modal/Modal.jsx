/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const Modal = ({
  children, isOpen, closeModal, showXMark, className,
}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return ReactDOM.createPortal(
    <article
      className={
        classNames(
          'fixed top-0 left-0 w-full min-h-screen justify-center items-center z-50 bg-black/70',
          { hidden: !isOpen, flex: isOpen },
        )
      }
    >
      <div
        className={`flex items-center relative p-5 min-w-[320px] max-w-[1000px] min-h-[200px] max-h-[800px] overflow-y-auto bg-white rounded ${className}`}
        onClick={handleModalContainerClick}
      >
        {showXMark ? <FontAwesomeIcon icon={faXmark} className="cursor-pointer absolute top-[1rem] right-[1rem]" onClick={closeModal} /> : null}

        {children}
      </div>
    </article>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
