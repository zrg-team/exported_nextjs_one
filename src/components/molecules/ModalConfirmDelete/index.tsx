import { Text } from '@components/atoms/Text';
import CommonButton from '@components/molecules/CommonButton';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type ModalConfirmDeleteProps = DefaultPageProps & {
  className?: string;
};

function ModalConfirmDelete(props: ModalConfirmDeleteProps): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <Text textType="Text" className={styles.text_2}>
        {'Are you sure to delete this note ? '}
      </Text>
      <div className={styles.button_wrapper_3}>
        <CommonButton className={styles.common_button_3} />
        <CommonButton className={styles.common_button_3} />
      </div>
    </div>
  );
}

export default ModalConfirmDelete;
