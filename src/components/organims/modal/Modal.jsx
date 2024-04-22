import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

function Modal({
  open = false,
  title = '',
  onClose,
  children,
}) {
  return (
    <>
      <div
        className={classNames(
          'modal',
          { 'modal--open': open }
        )}
        onClick={() => onClose()}
      >
        {open && (
          <div className="modal__container" onClick={(e) => e.stopPropagation()}>
            <div className="modal__header">
              <p className="modal__title">{title}</p>
              <span className='modal__close-icon' onClick={onClose}>
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </span>
            </div>
            <div className="modal__content">
              {children}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Modal