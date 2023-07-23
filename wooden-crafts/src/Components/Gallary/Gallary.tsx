import React, { useState } from 'react';
import styles from "./Gallary/Gallary.module.css";

interface GallaryProps {
  images: string[];
}

const Gallary: React.FC<GallaryProps> = ({ images }:GallaryProps) => {
  const [mainImage, setMainImage] = useState<string>(images[0]);

  return (
    <div className={styles['gallary']}>
      <div className={styles['main-image']}>
        <img src={mainImage} />
      </div>
      <div className={styles['image-options']}>
        {images.map(file => (
          <div className={styles['image']}>
            <img src={file} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallary;