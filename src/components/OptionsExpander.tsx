import React from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
import { FiHelpCircle } from 'react-icons/fi';

interface Props {
  options: JSX.Element;
  children?: any;
  id: string;
}
export const OptionsExpander = ({ options, children, id }: Props) => {
  return (
    <div>
      <OverlayTrigger
        trigger={['click']}
        placement="auto"
        overlay={
          <Popover
            style={{ zIndex: 1035 }}
            placement="bottom"
            id={id}
            className="border shadow"
          >
            <Popover.Content style={{ whiteSpace: 'pre-wrap' }}>
              {options}
            </Popover.Content>
          </Popover>
        }
      >
        <Button variant="outline-dark" className="mx-1 px-1 py-0 my-0">
          {children}
        </Button>
      </OverlayTrigger>
    </div>
  );
};
