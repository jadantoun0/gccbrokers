import { Client } from 'pg';

const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DATABASE_URL,
    port: 25016,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false,
    },
};

export const connectDB = async () => {
    const client = new Client(config);

    try {
        await client.connect();
        console.log('Connected to PostgreSQL');
        return client;
    } catch (error) {
        console.error('Database connection error:', error);
        throw error;
    }
};
