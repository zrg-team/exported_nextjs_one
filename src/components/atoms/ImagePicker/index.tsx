import React, { forwardRef, useEffect } from 'react';
import Image from 'next/image';

import { useFilePicker } from 'use-file-picker';

import styles from './index.module.css';

export interface ImagePickerValue {
  name: string;
  url: string;
}

export interface ImagePickerProps {
  children?: React.ReactNode;
  multiple?: boolean;
  maxCount?: number;
  value?: (File | ImagePickerValue)[];
  onChange?: (files: File[]) => void;
}

const ImagePicker = forwardRef<HTMLDivElement, ImagePickerProps>((props: ImagePickerProps, ref) => {
  const { children, onChange, maxCount, multiple, value } = props;
  const [openFileSelector, { plainFiles, errors }] = useFilePicker({
    accept: 'image/*',
    multiple,
    readAs: 'ArrayBuffer',
    limitFilesConfig: {
      max: maxCount,
      min: 1,
    },
  });

  const renderedImages = value ? value : plainFiles;

  useEffect(() => {
    setTimeout(() => {
      if (plainFiles.length > 0 && onChange && errors.length === 0) {
        onChange(plainFiles);
      }
    }, 0);
  }, [errors, plainFiles]);

  return (
    <div ref={ref} onClick={openFileSelector} tabIndex={0}>
      <div className={styles.ImagePicker__Children}>{children}</div>
      <div className={styles.ImagePicker__ImageList}>
        {renderedImages.map((file) => (
          <div key={file.name} className={styles.ImagePicker__Image}>
            <Image
              src={file instanceof File ? URL.createObjectURL(file) : file.url}
              alt={file.name}
              className={styles.ImagePicker__Image}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export { ImagePicker };
