const config: { port: number } = {
  port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
};

export default config;
