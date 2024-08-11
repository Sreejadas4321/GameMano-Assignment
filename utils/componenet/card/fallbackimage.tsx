import React, { useEffect, useState } from 'react';

interface FallbackImageProps {
  fallbackSrc: string;
  src: string;
  alt: string;
  customClass?: string;
}

const FallbackImage = ({ src, fallbackSrc, alt,customClass, ...props }: FallbackImageProps) => {
  const [imgSrc, setImgSrc] = useState<string >(src);
  useEffect(() => {
    setImgSrc(src);
  }, [src]);
  const handleError = () => {
    setImgSrc(fallbackSrc);
    console.log("error");
  };
  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={customClass}
      {...props}
    />
  );
};

export default FallbackImage;