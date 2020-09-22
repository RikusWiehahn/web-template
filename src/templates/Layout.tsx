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
  hideFooter?: boolean;
}

class _Layout extends Component<Props> {
  render() {
    const { title } = this.props;
    return (
      <div className="bg-light" style={{ height: '100vh' }}>
        <Head>
          <title>{title}</title>
        </Head>

        <div
          style={{
            height: 'calc(100vh)',
            overflowY: 'auto',
            paddingTop: '4rem',
          }}
        >
          {this.props.banner}
          <Container fluid style={{ minHeight: '100vh' }}>
            <Row>
              <Col>{this.props.children}</Col>
            </Row>
          </Container>
          <Container
            fluid
            className="m-0 p-0"
            style={{ position: 'fixed', top: 0 }}
          >
            <div
              style={{ height: '4rem' }}
              className="bg-primary p-2 d-flex shadow-sm"
            >
              <div
                className="d-flex align-items-center"
                style={{ width: '6rem' }}
              >
                <MenuUtility />
              </div>
              <div style={{ flex: 1 }}>
                <h4 className="pt-1 m-0 text-center">
                  <Link href={routes.HOME}>
                    <a className="text-center text-light">
                      {this.props.header || 'Blog'}
                    </a>
                  </Link>
                </h4>
              </div>
              <div style={{ width: '5rem' }}></div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export const Layout = withRouter(_Layout);
