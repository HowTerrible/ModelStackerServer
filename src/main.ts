import express from 'express';
import { logger } from './common/logger';

const server = express();
const restartDuration = 2000;

let PORT = Number(process.env.PORT) || 3000;

/** 增加通用头 */
server.use((req, res, next) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  next();
});

server.get('/', (req, res) => {
  logger.info('寄');
  res.end();
});

function main() {
  const current = server.listen(PORT);

  current.on('listening', () => {
    logger.info(`Server is running at http://localhost:${PORT}`);
  });

  current.on('error', (err) => {
    // 非系统监听端口操作报错
    if ((err as any).code !== 'EADDRINUSE') {
      return;
    }

    logger.error(`Port ${PORT} already in use.`);

    logger.warn(`Server is trying to restart at new port ${++PORT}`);

    setTimeout(() => {
      current.listen(PORT);
    }, restartDuration);
  });
}

main();

export default server;
