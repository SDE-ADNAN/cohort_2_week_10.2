import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
dotenv.config();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select: {
            id: true,
            password: true
        }
    })
    console.log(res)
}

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: { email: username },
        data: {
            firstName,
            lastName
        }
    })
    console.log(res)
}
async function deleteUser(username: string) {
    const res = await prisma.user.delete({
        where: { email: username }
    })
    console.log(res)
}



// insertUser("adnansde2@gmail.com","3621","Adnan","Khan")
// updateUser("adnansde2@gmail.com", { firstName: "Changed", lastName: "Changed" })
// deleteUser("adnansde2@gmail.com")