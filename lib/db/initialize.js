const { sql, db} = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
    try {
        // Create the users table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        hashed_password VARCHAR(100) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;

    const exampleUsers = [
        {
            'name': 'Yuki',
            'email': 'yukiobata1@gmail.com',
            'password': 'fn10fdan9',
        },
        {
            'name': 'Tanaka',
            'email': 'tanaka-p@example.com',
            'password': 'password',
        }
    ]

    console.log(`Created "users" table`);

    const insertedUsers = await Promise.all(
        exampleUsers.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return client.sql`
            INSERT INTO users (name, email, hashed_password)
            VALUES (${user.name}, ${user.email}, ${hashedPassword})`;

        })
    )

    console.log(`Inserted ${insertedUsers.length} users`);
  
    } catch (e) {
        console.error(e);
    }
}


async function main() {
    const client = await db.connect();
    seedUsers(client);
}

main();