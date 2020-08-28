import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

interface Props {
  message: string;
  id: string;
  children?: any;
}

export const HoverPopover = ({ message, id, children }: Props) => {
  return (
    <OverlayTrigger
      trigger={['focus', 'hover']}
      placement="bottom"
      overlay={
        <Popover id={id} placement="auto" className="border shadow">
          <Popover.Content>{message}</Popover.Content>
        </Popover>
      }
    >
      <div>{children || null}</div>
    </OverlayTrigger>
  );
};
