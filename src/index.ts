const isImageUploaded = (event: Event): boolean => {
  if (!(event.target instanceof HTMLInputElement)) return false;

  if (!event.target.files || event.target.files.length === 0) return false;

  return true;
};

const convertImageToCanvas = ({ img }: { img: HTMLImageElement }): HTMLCanvasElement => {
  // Get canvas context
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  // Set canvas dimensions to match the image
  canvas.width = img.width;
  canvas.height = img.height;

  // Draw the image onto the canvas
  ctx.drawImage(img, 0, 0, img.width, img.height);

  return canvas;
};

export { convertImageToCanvas, isImageUploaded };
