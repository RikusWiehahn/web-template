import React from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { FiHelpCircle } from 'react-icons/fi';

interface Props {
  message: string;
  title?: string;
  id: string;
}
export const ExplanationExpander = ({ message, title, id }: Props) => {
  return (
    <OverlayTrigger
      trigger={['focus', 'hover']}
      placement="auto"
      overlay={
        <Popover placement="bottom" id={id} className="border shadow">
          {title && <Popover.Title>Popover Title</Popover.Title>}
          <Popover.Content style={{ whiteSpace: 'pre-wrap' }}>
            {message}
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="outline-light" className="mx-1 px-1 py-0 my-0">
        <FiHelpCircle className="text-dark" />
      </Button>
    </OverlayTrigger>
  );
};
