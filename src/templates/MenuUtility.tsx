import React, { Component } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { FiMenu } from 'react-icons/fi';
import Link from 'next/link';
import { routes } from '../config/_routes';
import { connect } from 'react-redux';
import { StoreState } from '../config/ReduxStore';

interface ScreenProps extends StoreState {}

interface ScreenState {
  showModal: boolean;
}
class _MenuUtility extends Component<ScreenProps, ScreenState> {
  constructor(props: ScreenProps) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentWillUnmount() {
    this.setState({ showModal: false });
  }

  _toggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  renderForm = (): JSX.Element | null => {
    return (
      <div>
        <Card.Body>
          <Link href={routes.HOME}>
            <a onClick={this._toggleModal}>
              <h3
                data-cy="home-button-menu-utility"
                className="text-center mb-3 text-white"
              >
                Home
              </h3>
            </a>
          </Link>
          <Link href={routes.ADMIN}>
            <a onClick={this._toggleModal}>
              <h3 className="text-center mb-3 text-white">All articles</h3>
            </a>
          </Link>
          <div className="d-flex justify-content-center">
            <Button onClick={this._toggleModal}>Back</Button>
          </div>
        </Card.Body>
      </div>
    );
  };

  renderModal() {
    const { showModal } = this.state;
    return (
      <Modal
        className="bg-primary"
        dialogClassName="modal-xl d-flex flex-direction-column justify-content-center align-items-center h-100 w-100 bg-primary"
        dialogAs={Container}
        centered
        backdropClassName="m-0 p-0 bg-primary"
        show={showModal}
        onHide={this._toggleModal}
      >
        {this.renderForm()}
      </Modal>
    );
  }

  render() {
    return (
      <>
        <Button
          onClick={this._toggleModal}
          aria-label="Menu Button"
          variant="outline-primary"
          className="m-0 px-2 pt-2 border-0"
          style={{ borderRadius: '2rem' }}
          data-cy="menu-utility-button"
        >
          <FiMenu size={24} className="m-0 p-0 pb-1" />
        </Button>
        {this.renderModal()}
      </>
    );
  }
}

export const MenuUtility = connect((state: StoreState) => state)(_MenuUtility);
