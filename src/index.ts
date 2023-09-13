/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { blueCoefficient, greenCoefficient, redCoefficient } from "utils/constants";

const convertToGreyscale = ({
  sourceCanvas,
  targetCanvas,
}: {
  sourceCanvas: HTMLCanvasElement;
  targetCanvas: HTMLCanvasElement;
}): void => {
  // get canvas context
  const ctx = targetCanvas.getContext("2d")!;

  // source and target canvas dimensions must match
  targetCanvas.width = sourceCanvas.width;
  targetCanvas.height = sourceCanvas.height;

  // copy source canvas onto target canvas
  ctx.drawImage(sourceCanvas, 0, 0);

  // Get image data
  const imageData = ctx.getImageData(0, 0, targetCanvas.width, targetCanvas.height);
  const data = imageData.data;

  // Convert each pixel to greyscale
  for (let i = 0; i < data.length; i += 4) {
    const grey = data[i] * redCoefficient + data[i + 1] * greenCoefficient + data[i + 2] * blueCoefficient;
    data[i] = grey; // red
    data[i + 1] = grey; // green
    data[i + 2] = grey; // blue
  }

  // Put modified image data back onto canvas
  ctx.putImageData(imageData, 0, 0);
};

export { convertToGreyscale };
