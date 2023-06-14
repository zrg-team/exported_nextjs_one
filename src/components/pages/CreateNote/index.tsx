import Background from '@components/molecules/Background';
import Iconssafarichevronbackward from '@components/molecules/Iconssafarichevronbackward';
import { Text } from '@components/atoms/Text';
import Property1DefaultRequiredFalseQuestionFalseFillFalse from '@components/molecules/Property1DefaultRequiredFalseQuestionFalseFillFalse';
import CommonButton from '@components/molecules/CommonButton';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type CreateNoteProps = DefaultPageProps & {
  className?: string;
};

function CreateNote(props: CreateNoteProps): JSX.Element {
  return (
    <div className={styles.page_container}>
      <Background className={styles.background_1} />
      <div className={styles.container_8}>
        <div className={styles.wrapper_8}>
          <div className={styles.info_header_5}>
            <Iconssafarichevronbackward className={styles.iconssafarichevronbackward_4} />
            <Text textType="Text" className={styles.text_5}>
              {'Back'}
            </Text>
          </div>
          <div className={styles.card_8}>
            <Text textType="Text" className={styles.text_7}>
              {'Create note'}
            </Text>
            <div className={styles.form_8}>
              <Property1DefaultRequiredFalseQuestionFalseFillFalse
                className={styles.text_field_8}
              />
              <CommonButton className={styles.common_button_8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
