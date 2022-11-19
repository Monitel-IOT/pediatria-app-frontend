/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ReactDOM from 'react-dom';
import classNames from 'classnames';

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return ReactDOM.createPortal(
    <article
      className={
        classNames(
          'fixed top-0 left-0 w-full min-h-screen justify-center items-center z-50 bg-black/70',
          { hidden: !isOpen, flex: isOpen },
        )
      }
      onClick={closeModal}
    >
      <div
        className="relative p-5 min-w-[320px] max-w-[480px] min-h-[200px] max-h-[600px] overflow-y-auto bg-white rounded"
        onClick={handleModalContainerClick}
      >
        {children}
      </div>
    </article>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
