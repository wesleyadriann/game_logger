export const logger = (...message: any[]) => {
  const asctime = new Date().toISOString();
  console.log(`[LOG][${asctime}]`, ...message);
};
