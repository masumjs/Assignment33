import express from 'express';
import apiRoutes from './routes/api.js';
import config from './app/config/config.js';
const app = express();
const PORT = config.port;

app.use(express.json());


app.use('/api/blogs', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});