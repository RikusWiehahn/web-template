import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { routes } from '../config/_routes';
import { MenuUtility } from './MenuUtility';
import withRouter, { WithRouterProps } from 'next/dist/client/with-router';
import Head from 'next/head';

interface Props extends WithRouterProps {
  children: JSX.Element | null;
  title?: string;
  header?: string;
  banner?: JSX.Element | null;
}

class _Layout extends Component<Props> {
  render() {
    return (
      <div className="bg-light" style={{ height: '100vh' }}>
        <Head>
          <title>{this.props.title || ''}</title>
        </Head>
        <div
          id="scroll-container"
          style={{ height: 'calc(100vh)', overflowY: 'auto' }}
        >
          <Container
            fluid
            className="m-0 p-0 bg-dark"
            style={{ position: 'fixed', top: 0, zIndex: 0 }}
          >
            <div style={{ height: '3rem' }} className="p-1 d-flex ">
              <div style={{ width: '4rem' }}>
                <MenuUtility />
              </div>
              <div style={{ flex: 1 }}>
                <h4 className="pt-1 m-0 text-white text-center">
                  {this.props.header || ''}
                </h4>
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
        </div>
      </div>
    );
  }
}

export const Layout = withRouter(_Layout);
