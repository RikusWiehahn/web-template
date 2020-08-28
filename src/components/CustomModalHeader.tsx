import React from 'react';
import { Button } from 'react-bootstrap';
import { FiX } from 'react-icons/fi';

export const CustomModalHeader = ({
  label,
  labelComponent,
  onClose,
}: {
  label?: string;
  labelComponent?: JSX.Element;
  onClose: () => void;
}) => {
  return (
    <div className="d-flex px-3 pt-3">
      <div className="pt-1" style={{ flex: 1, display: 'flex' }}>
        <h4>{label}</h4>
        {labelComponent}
      </div>
      <div>
        <Button
          data-cy="close-modal-button"
          className="border border-dark p-0 m-0 pb-1 px-1"
          variant="dark"
          onClick={onClose}
        >
          <FiX className="button-icon" />
        </Button>
      </div>
    </div>
  );
};
