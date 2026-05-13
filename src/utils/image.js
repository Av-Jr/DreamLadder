const AWS_BUCKET = "https://dreamladder-assets.s3.ap-south-1.amazonaws.com/public";

export const img = (name) => {
  return `${AWS_BUCKET}/${name}.webp`;
};