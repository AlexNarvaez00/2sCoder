import { toBlob, toPng } from "html-to-image";

export const getImageFromHTML = async (editor: HTMLDivElement) => {
  const img = await toPng(editor);
  const png = new Image();
  png.src = img;
  return png;
};

export const putInClipboard = async (editor: HTMLDivElement) => {
  const blob = await toBlob(editor);
  if (!blob) return;
  await navigator.clipboard.write([
    new ClipboardItem({
      [blob.type]: blob,
    }),
  ]);
  return "ok";
};

export const downloadImage = () => {};
