import Background from '@components/molecules/Background';
import { Text } from '@components/atoms/Text';
import CommonButton from '@components/molecules/CommonButton';
import { useNavigateService } from '@services/navigate';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type WelcomeProps = DefaultPageProps & {
  className?: string;
};

function Welcome(props: WelcomeProps): JSX.Element {
  const navigation = useNavigateService();

  const handleOnPress = () => {
    navigation.navigate('/signup');
  };
  const handleText7 = () => {
    navigation.navigate('/login');
  };
  return (
    <div className={styles.page_container}>
      <div className={styles.container_7}>
        <Background className={styles.background_2} />
        <div className={styles.wrapper_7}>
          <Text textType="Text" className={styles.text_4}>
            {'Awesome Note'}
          </Text>
          <div className={styles.card_7}>
            <Text textType="Text" className={styles.text_6}>
              {'Welcome to our take note application'}
            </Text>
            <CommonButton
              className={styles.common_button_6}
              onPress={handleOnPress}
              label={'Sign up'}
            />
            <Text textType="Text" className={styles.text_7} onClick={handleText7}>
              {'Already a member? Log in'}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
