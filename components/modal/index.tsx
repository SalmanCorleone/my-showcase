'use client';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/utils/cn';
import { RiCloseCircleLine } from 'react-icons/ri';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
};

const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, closeOnEscape]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (closeOnOverlayClick && e.target === dialogRef.current) {
      onClose();
    }
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      className={cn(
        'm-auto bg-transparent backdrop:bg-black/50 backdrop:animate-fade-in p-0',
        !isOpen && 'hidden',
        className,
      )}
      onClick={handleOverlayClick}
    >
      <div
        className={cn(
          'relative flex flex-col min-w-[320px] min-h-[200px] max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl',
          'bg-light p-6 border-2 border-dark',
        )}
      >
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-md hover:bg-dark/10"
            aria-label="Close modal"
          >
            <RiCloseCircleLine size={24} className="text-dark" />
          </button>
        )}
        {children}
      </div>
    </dialog>,
    document.body,
  );
};

export default Modal;
