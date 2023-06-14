import Background from '@components/molecules/Background';
import { Text } from '@components/atoms/Text';
import NoteItem from '@components/molecules/NoteItem';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type HomeProps = DefaultPageProps & {
  className?: string;
};

function Home(props: HomeProps): JSX.Element {
  return (
    <div className={styles.page_container}>
      <div className={styles.container_6}>
        <Background className={styles.background_2} />
        <div className={styles.wrapper_6}>
          <div className={styles.header_wrapper_6}>
            <Text textType="Text" className={styles.text_5}>
              {'Awesome Note'}
            </Text>
            <Text textType="Text" className={styles.text_6}>
              {'Create note'}
            </Text>
          </div>
          <NoteItem className={styles.note_item_6} />
          <NoteItem className={styles.note_item_6} />
          <NoteItem className={styles.note_item_6} />
        </div>
      </div>
    </div>
  );
}

export default Home;
