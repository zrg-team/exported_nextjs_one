import { Text } from '@components/atoms/Text';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type TestProps = DefaultPageProps & {
  className?: string;
};

function Test(props: TestProps): JSX.Element {
  return (
    <div className={`${styles.custom_component_container} ${props.className}`}>
      <Text textType="Text" className={styles.text_1}>
        {'[Text]'}
      </Text>
      <Text textType="Text" className={styles.text_2}>
        {'[Text]'}
      </Text>
      <Text textType="Text" className={styles.text_2}>
        {'[Text]'}
      </Text>
      <div className={styles.container}>
        <div className={styles.left_panel} />
        <div className={styles.left_panel} />
        <div className={styles.left_panel} />
        <div className={styles.left_panel} />
        <div className={styles.left_panel} />
      </div>
    </div>
  );
}

export default Test;
