/**
 * Retrieves the target input element from an event if it is of type HTMLInputElement
 * and has uploaded files. If the event target is not an instance of HTMLInputElement
 * or doesn't have any files, it returns null.
 *
 * @param {Event} event - The event triggered from a file input change.
 * @returns {HTMLInputElement | null} The target input element with files or null.
 */
const getImageTarget = (event: Event): HTMLInputElement | null => {
  if (!(event.target instanceof HTMLInputElement)) return null;

  if (!event.target.files || event.target.files.length === 0) return null;

  return event.target;
};

/**
 * Converts a given HTMLImageElement into an HTMLCanvasElement. The resulting canvas will have
 * dimensions that match the provided image. If the canvas 2D context can be retrieved, the image
 * will be drawn onto the canvas. Otherwise, a blank canvas is returned.
 *
 * @param {HTMLImageElement} img - The image element to be converted to canvas.
 * @returns {HTMLCanvasElement} The canvas with the drawn image or a blank canvas if no 2D context.
 */
const convertImageToCanvas = (img: HTMLImageElement): HTMLCanvasElement => {
  // Get canvas context
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) return canvas;

  // Set canvas dimensions to match the image
  canvas.width = img.width;
  canvas.height = img.height;

  // Draw the image onto the canvas
  ctx.drawImage(img, 0, 0, img.width, img.height);

  return canvas;
};

export { convertImageToCanvas, getImageTarget };
