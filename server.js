import chalk from "chalk";
import express from "express";
import url from "url";
import path from "path";

const app = express();
const PORT = 3000;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, "../.", "public");

app.use(express.static(publicDirectory));

app.listen(PORT, () => {
	console.log(chalk.blue(`[server] server listening on port ${PORT}`));
});

