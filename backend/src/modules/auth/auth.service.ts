import rentACarSystemDB from "../../db/prisma";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

interface AuthResponse {
    user: any;
    token: string;
}

export class AuthService {
    async login(email: string, password: string): Promise<AuthResponse> {
        const user = await rentACarSystemDB.user.findUnique({
            where: { email },
            include: { role: true },
        });

        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        const isValidPassword = await bcryptjs.compare(password, user.password);

        if (!isValidPassword) {
            throw new Error("Contraseña incorrecta");
        }

        const token = jwt.sign(
            { id: user.id, role: user.role.name },
            process.env.JWT_SECRET!,
            {
                expiresIn: "12h",
            }
        );

        delete user.password;

        return { user, token };
    }

    async register(name: string, lastname: string, email: string, password: string, phone_number?: string): Promise<AuthResponse> {
        const existingUser = await rentACarSystemDB.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            throw new Error("El usuario ya existe");
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const newUser = await rentACarSystemDB.user.create({
            data: {
                name,
                lastname,
                email,
                password: hashedPassword,
                phone_number,
                role_id: 2,
            },
            include: { role: true },
        });

        const token = jwt.sign(
            { id: newUser.id, role: newUser.role.name },
            process.env.JWT_SECRET!,
            {
                expiresIn: "12h",
            }
        );

        delete newUser.password;

        return { user: newUser, token };
    }
}