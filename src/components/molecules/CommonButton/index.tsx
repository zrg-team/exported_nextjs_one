import { Text } from '@components/atoms/Text';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type CommonButtonProps = DefaultPageProps & {
  className?: string;
  label: string;
  onPress: () => void;
};

function CommonButton(props: CommonButtonProps): JSX.Element {
  const handleBox1 = () => {
    const { onPress } = props;
    return onPress && onPress();
  };
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <div className={styles.box_1} onClick={handleBox1}>
        <Text textType="Text" className={styles.text_14}>
          {props.label}
        </Text>
      </div>
    </div>
  );
}

export default CommonButton;
