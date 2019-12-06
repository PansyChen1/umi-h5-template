import React from 'react';
import styles from './index.css';
import BottomBar from '@/components/bottom-nav';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>

      {props.children}

      <div
        style={{
          width: '100%',
          position: 'fixed',
          bottom: 0,
      }}>
        <BottomBar/>
      </div>
    </div>
  );
};

export default BasicLayout;
