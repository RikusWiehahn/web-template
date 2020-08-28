import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { routes } from '../config/_routes';
import { MenuUtility } from './MenuUtility';
import withRouter, { WithRouterProps } from 'next/dist/client/with-router';

interface Props extends WithRouterProps {
  children: JSX.Element | null;
  title?: string;
  banner?: JSX.Element | null;
  hideFooter?: boolean;
}

class _Layout extends Component<Props> {
  renderFooter = () => {
    if (!this.props.hideFooter) {
      return (
        <div style={{ minHeight: '4rem' }} className="d-flex">
          <Container>
            <Row className="mt-2">
              <Col>
                <div className="d-flex">
                  <Button
                    variant="link"
                    onClick={() => this.props.router.push(routes.HOME)}
                  >
                    <h4 className="">Home</h4>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="bg-light" style={{ height: '100vh' }}>
        <div
          id="scroll-container"
          style={{ height: 'calc(100vh)', overflowY: 'auto' }}
        >
          <Container
            fluid
            className="m-0 p-0"
            style={{ position: 'fixed', top: 0, zIndex: 9999 }}
          >
            <div style={{ height: '3rem' }} className="p-1 d-flex ">
              <div style={{ width: '4rem' }}>
                <MenuUtility />
              </div>
              <div style={{ flex: 1 }}>
                <h4 className="pt-1 m-0 text-center"></h4>
              </div>
              <div style={{ width: '4rem' }}></div>
            </div>
          </Container>
          {this.props.banner}
          <Container style={{ minHeight: '100vh' }}>
            <Row>
              <Col>{this.props.children}</Col>
            </Row>
          </Container>
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}

export const Layout = withRouter(_Layout);
