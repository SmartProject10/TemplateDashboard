export const containsScript = (input) => {
  const scriptPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  return scriptPattern.test(input);
};
