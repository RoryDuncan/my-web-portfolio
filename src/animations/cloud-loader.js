

const imagesPath = "/images/clouds";

const images = [
  "Layer 2.png",
  "Layer 3.png",
  "Layer 4.png",
  "Layer 5.png",
  "Layer 6.png",
  "Layer 7.png",
  "Layer 9.png",
];

export async function loadImages() {

  const loadingImages = images.map((filename) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.alt = "A cloud drifting past";
      image.onload = () => resolve(image);
      image.src = `${imagesPath}/${filename}`;
    })
  });

  const results = await Promise.allSettled(loadingImages);

  return results.map(result => result.value);
}
