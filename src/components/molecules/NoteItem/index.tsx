import assets from '@assets/index';
import { Text } from '@components/atoms/Text';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type NoteItemProps = DefaultPageProps & {
  className?: string;
};

function NoteItem(props: NoteItemProps): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <div className={styles.wrapper_note_110}>
        <Text textType="Text" className={styles.text_10}>
          {'Note 1'}
        </Text>
      </div>
      <Image
        sourceType="upload"
        className={styles.image_12}
        src={assets('1666171252972-svg')}
        alt="Image12"
      />
    </div>
  );
}

export default NoteItem;
