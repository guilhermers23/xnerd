import { useEffect, useMemo, useState, type ChangeEvent } from "react";
type ImagesState = { file: File | null; preview?: string };

export const useImageUpload = () => {
  const [images, setImages] = useState<{
    cover: ImagesState;
    avatar: ImagesState;
  }>({
    cover: { file: null },
    avatar: { file: null }
  });

  const onchangeFile = (field: "cover" | "avatar") =>
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files?.[0]) return;

      const file = e.target.files[0];

      setImages((prev) => ({
        ...prev,
        [field]: {
          file,
          preview: URL.createObjectURL(file)
        }
      }));
    };

  const clear = () => {
    setImages({
      cover: { file: null },
      avatar: { file: null }
    });
  };

  const isDisabled = useMemo(() => {
    return !images.cover.file && !images.avatar.file;
  }, [images]);

  useEffect(() => {
    return () => {
      Object.values(images).forEach((img) => {
        if (img.preview) URL.revokeObjectURL(img.preview);
      });
    };
  }, [images]);

  return { images, onchangeFile, clear, isDisabled };
};
