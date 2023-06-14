import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DefaultHeader from '@components/molecules/DefaultHeader';
import { Text } from '@components/atoms/Text';
import { ControlledInput } from '@components/atoms/ControlledInput';
import CustomInput from '@components/molecules/CustomInput';
import { Button } from '@components/atoms/Button';
import DefaultFooter from '@components/molecules/DefaultFooter';
import { useCreateNoteMutation } from '@services/note';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type TestFormProps = DefaultPageProps & {
  className?: string;
};
interface Form1FormData {
  input_1: string;
}
function TestForm(props: TestFormProps): JSX.Element {
  const formForm1 = useForm1();
  const createNoteMutation = useCreateNoteMutation();

  const handleForm1Button = async (values: Form1FormData) => {
    await createNoteMutation.mutateAsync({ notes: { content: undefined } });
  };
  return (
    <div className={styles.page_container}>
      <DefaultHeader className={styles.defaultheader_1} />
      <div className={styles.content_box_0}>
        <form className={styles.form_1}>
          <Text textType="Text" className={styles.form_1_name}>
            {'Form Name'}
          </Text>
          <div className={styles.input_1_container}>
            <div className={styles.input_1_inner}>
              <Text textType="Text" className={styles.input_1_label}>
                {'Label'}
              </Text>
              <Text textType="Text" className={styles.input_1_required}>
                {'*'}
              </Text>
            </div>
            <ControlledInput
              placeholder={'Placeholder'}
              className={styles.input_1}
              control={formForm1.control}
              formField="input_1"
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
          <CustomInput className={styles.defaultheader_1} />
          <Button
            buttonType="primary"
            className={styles.form_1_button}
            onClick={formForm1.handleSubmit(handleForm1Button)}
          >
            {'Submit'}
          </Button>
        </form>
      </div>
      <DefaultFooter className={styles.defaultheader_1} />
    </div>
  );
}

const useForm1 = () => {
  const validationScheme = useMemo(
    () =>
      yup.object().shape({
        input_1: yup.string().notRequired(),
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
export default TestForm;
