import Background from '@components/molecules/Background';
import { Text } from '@components/atoms/Text';
import Property1DefaultRequiredFalseQuestionFalseFillFalse from '@components/molecules/Property1DefaultRequiredFalseQuestionFalseFillFalse';
import CommonButton from '@components/molecules/CommonButton';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type LoginProps = DefaultPageProps & {
  className?: string;
};

function Login(props: LoginProps): JSX.Element {
  return (
    <div className={styles.page_container}>
      <Background className={styles.background_1} />
      <div className={styles.container_7}>
        <div className={styles.wrapper_7}>
          <Text textType="Text" className={styles.text_4}>
            {'Awesome Note'}
          </Text>
          <div className={styles.card_7}>
            <Text textType="Text" className={styles.text_6}>
              {'Login'}
            </Text>
            <div className={styles.login_form_7}>
              <Property1DefaultRequiredFalseQuestionFalseFillFalse
                className={styles.text_field_7}
              />
              <Property1DefaultRequiredFalseQuestionFalseFillFalse
                className={styles.text_field_7}
              />
              <CommonButton className={styles.common_button_7} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
