import { Text } from '@components/atoms/Text';
import { Input } from '@components/atoms/Input';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type CustomInputProps = DefaultPageProps & {
  className?: string;
};

function CustomInput(props: CustomInputProps): JSX.Element {
  return (
    <div className={`${styles.custom_component_container} ${props.className}`}>
      <div className={styles.input_1_container}>
        <div className={styles.input_1_inner}>
          <Text textType="Text" className={styles.input_1_label}>
            {'Label'}
          </Text>
          <Text textType="Text" className={styles.input_1_required}>
            {'*'}
          </Text>
        </div>
        <Input
          placeholder={'Placeholder'}
          className={styles.input_1}
          inputStyle={{
            backgroundColor: 'rgb(255, 255, 255)',
            width: '100%',
            fontWeight: '500',
            height: '60px',
            border: '1px solid rgb(217, 217, 217)',
          }}
        />
        <div className={styles.input_1_error_message_container}>
          <Text textType="Text" className={styles.input_1_required}>
            {'Error Message'}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default CustomInput;
