const AWS_BUCKET = "https://dlcassetscoin.s3.ap-south-1.amazonaws.com";

export const img = (name) => {
  return `${AWS_BUCKET}/${name}.webp`;
};