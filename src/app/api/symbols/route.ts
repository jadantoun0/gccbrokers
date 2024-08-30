import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../db';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get('page')) || 1;
    const limit = Number(searchParams.get('limit')) || 10;
    const name = searchParams.get('name') || ''; 
    const offset = (page - 1) * limit;

    const client = await connectDB();

    try {
        let query = "";
        let queryParams = [];
        if (!name) {
            query = 'SELECT * FROM symbols LIMIT $1 OFFSET $2';
            queryParams = [limit, offset];
        } else {
            query = 'SELECT * FROM symbols WHERE symbol ILIKE $1 LIMIT $2 OFFSET $3';
            queryParams = [`${name}%`, limit, offset];
        }
        const result = await client.query(query, queryParams);
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error querying database:', error);
        return NextResponse.error();
    } finally {
        await client.end();
        console.log('Database connection closed');
    }
}
