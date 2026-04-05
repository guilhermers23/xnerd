import { useState, type ChangeEvent } from "react";

export const useFileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | undefined>(undefined);

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const newFile = e.target.files[0];
    if (preview) URL.revokeObjectURL(preview);

    setFile(newFile);
    setPreview(URL.createObjectURL(newFile));
  };

  const clearPost = () => {
    if (preview) URL.revokeObjectURL(preview);
    setFile(null);
    setPreview(undefined);
  };

  return { file, preview, onChangeFile, clearPost };
};
