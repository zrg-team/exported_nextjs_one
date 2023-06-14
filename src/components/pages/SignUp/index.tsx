import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Background from '@components/molecules/Background';
import { Text } from '@components/atoms/Text';
import { Row } from '@components/atoms/Row';
import { Col } from '@components/atoms/Col';
import { ControlledInput } from '@components/atoms/ControlledInput';
import { Button } from '@components/atoms/Button';
import { useSignupWithEmailMutation } from '@services/authentication';
import { useNavigateService } from '@services/navigate';
import { Toast } from '@components/atoms/Toast';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type SignUpProps = DefaultPageProps & {
  className?: string;
};
interface Form1FormData {
  email_input: string;
  password_input: string;
}
function SignUp(props: SignUpProps): JSX.Element {
  const formForm1 = useForm1();
  const { errors: formForm1Error } = formForm1.formState;
  const signupWithEmailMutation = useSignupWithEmailMutation();
  const navigation = useNavigateService();

  const handleSubmitButton = async (values: Form1FormData) => {
    try {
      await signupWithEmailMutation.mutateAsync({ table: 'users' });
      navigation.navigate('/login');
    } catch (error: unknown) {
      Toast.error();
    }
  };
  const handleText9 = () => {
    navigation.navigate('/login');
  };
  return (
    <div className={styles.page_container}>
      <div className={styles.container_9}>
        <Background className={styles.background_2} />
        <div className={styles.box_5} />
        <div className={styles.wrapper_9}>
          <Text textType="Text" className={styles.text_4}>
            {'Awesome Note'}
          </Text>
          <div className={styles.card_9}>
            <Text textType="Text" className={styles.text_6}>
              {'Sign up'}
            </Text>
            <Row
              gutter={[0, 32]}
              justify="center"
              align="middle"
              className={styles.form_1_container}
            >
              <Col xs={24} md={24} xl={24} className={styles.form_1_inner}>
                <form className={styles.form_1_inner}>
                  <div className={styles.input_1_container}>
                    <div className={styles.input_1_inner}>
                      <Text textType="Text" className={styles.input_1_label}>
                        {'Email'}
                      </Text>
                      <Text textType="Text" className={styles.input_1_required}>
                        {'*'}
                      </Text>
                    </div>
                    <ControlledInput
                      placeholder={'Please input email'}
                      className={styles.email_input}
                      control={formForm1.control}
                      formField="email_input"
                      inputStyle={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        width: '100%',
                        fontWeight: '500',
                        border: '1px solid rgb(217, 217, 217)',
                      }}
                    />
                    <div className={styles.input_1_error_message_container}>
                      <Text textType="Text" className={styles.input_1_required}>
                        {formForm1Error.email_input?.message}
                      </Text>
                    </div>
                  </div>
                  <div className={styles.input_1_container}>
                    <div className={styles.input_1_inner}>
                      <Text textType="Text" className={styles.input_1_label}>
                        {'Password'}
                      </Text>
                      <Text textType="Text" className={styles.input_1_required}>
                        {'*'}
                      </Text>
                    </div>
                    <ControlledInput
                      placeholder={formForm1Error.password_input?.message}
                      className={styles.email_input}
                      control={formForm1.control}
                      formField="password_input"
                      inputStyle={{
                        backgroundColor: 'rgb(255, 255, 255)',
                        width: '100%',
                        fontWeight: '500',
                        border: '1px solid rgb(217, 217, 217)',
                      }}
                    />
                    <div className={styles.input_1_error_message_container}>
                      <Text textType="Text" className={styles.input_1_required}>
                        {'Error Message'}
                      </Text>
                    </div>
                  </div>
                  <Button
                    buttonType="primary"
                    className={styles.submit_button}
                    onClick={formForm1.handleSubmit(handleSubmitButton)}
                  >
                    {'Submit'}
                  </Button>
                </form>
              </Col>
            </Row>
            <Text textType="Text" className={styles.text_9} onClick={handleText9}>
              {'Already a member? Log in'}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

const useForm1 = () => {
  const validationScheme = useMemo(
    () =>
      yup.object().shape({
        email_input: yup.number(),
        password_input: yup.string().notRequired(),
      }),
    [],
  );
  return useForm<Form1FormData>({
    resolver: yupResolver(validationScheme),
    shouldFocusError: true,
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
};
export default SignUp;
