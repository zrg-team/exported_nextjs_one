import { Button } from '@components/atoms/Button';
import { Icon } from '@components/atoms/Icon';
import { Row } from '@components/atoms/Row';
import { Col } from '@components/atoms/Col';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type PolicyProps = DefaultPageProps & {
  className?: string;
};

function Policy(props: PolicyProps): JSX.Element {
  return (
    <div className={styles.page_container}>
      <Button buttonType="primary" className={styles.button_1}>
        {'[Button]'}
      </Button>
      <Icon iconName="AiOutlineHome" size="24" className={styles.icon_1} color="#000" />
      <Row gutter={[32, 32]} justify="start" align="top" className={styles.row_1}>
        <Col xs={24} md={12} xl={8} className={styles.col_1}>
          <div className={styles.box_1} />
        </Col>
        <Col xs={24} md={12} xl={8} className={styles.col_2}>
          <div className={styles.box_1} />
        </Col>
        <Col xs={24} md={12} xl={8} className={styles.col_3}>
          <div className={styles.box_1} />
        </Col>
        <Col xs={24} md={12} xl={8} className={styles.col_4}>
          <div className={styles.box_1} />
        </Col>
        <Col xs={24} md={12} xl={8} className={styles.col_5}>
          <div className={styles.box_1} />
        </Col>
        <Col xs={24} md={12} xl={8} className={styles.col_6}>
          <div className={styles.box_1} />
        </Col>
        <Col xs={24} md={12} xl={8} className={styles.col_7}>
          <div className={styles.box_1} />
        </Col>
        <Col xs={24} md={12} xl={8} className={styles.col_8}>
          <div className={styles.box_1} />
        </Col>
        <Col xs={24} md={12} xl={8} className={styles.col_9}>
          <div className={styles.box_1} />
        </Col>
      </Row>
    </div>
  );
}

export default Policy;
