export const canUseServerSideFeatures = ({
  env,
}: NodeJS.Process = process): boolean => {
  return env.NODE_ENV !== "production";
};
