import assets from '@assets/index';
import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type IconssafarichevronbackwardProps = DefaultPageProps & {
  className?: string;
};

function Iconssafarichevronbackward(props: IconssafarichevronbackwardProps): JSX.Element {
  return (
    <div
      source={assets('1666171253144-svg')}
      sourceType="upload"
      className={`${styles.page_container} ${props.className}`}
    >
      <Image
        sourceType="upload"
        className={styles.image_15}
        src={assets('1666171253144-svg')}
        alt="Image15"
      />
    </div>
  );
}

export default Iconssafarichevronbackward;
