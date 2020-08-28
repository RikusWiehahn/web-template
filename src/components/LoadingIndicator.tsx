import React from 'react';

interface LoadingScreenProps {
  dark?: boolean;
  fullscreen?: boolean;
}

const _LoadingIndicator: React.FC<LoadingScreenProps> = ({ fullscreen }) => (
  <div
    className={fullscreen ? 'bg-light' : 'transparent'}
    style={{
      ...(fullscreen
        ? {
            position: 'fixed',
            height: '100vh',
            width: '100vw',
            zIndex: 9999,
          }
        : {}),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <div>
      <div
        style={{
          position: 'relative',
          padding: '1.25rem',
        }}
      >
        <div className="custom-loader"></div>
      </div>
    </div>
    {fullscreen ? <p>Loading...</p> : null}
  </div>
);

export const LoadingIndicator = _LoadingIndicator;
