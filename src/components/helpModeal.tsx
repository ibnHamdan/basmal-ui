import React from 'react';
import { Modal } from './Modal';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const HelpModal: React.FC<HelpModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
      <h1>طريقة اللعب</h1>
    </Modal>
  );
};
