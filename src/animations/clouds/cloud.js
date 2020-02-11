
export const color = "#fff";
export const shadowColor = "#EEECEC";

export function createCloud(tween) {

  const image = null;

  return {
    tween,
    image,
  }

};

function renderCloudToImage(width, height) {

  // OffscreenCanvas not good enough support just yet, so we do it the manual way
  const offscreenCanvas = document.createElement("canvas");

  offscreenCanvas.width = width;
  offscreenCanvas.height = height;

  const context = offscreenCanvas.getContext("2d", {
    desynchronized: true,
  });

  context.width = width;
  context.height = height;

  drawCloudShape(context);

}

function drawCloudShape(context) {

}
