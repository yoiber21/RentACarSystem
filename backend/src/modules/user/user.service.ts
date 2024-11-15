import rentACarSystemDB from "../../db/prisma";
import bcryptjs from "bcryptjs";

export class UserService {
  async createUser(userData) {
    const hashedPassword = await bcryptjs.hash(userData.password, 10);
    userData.password = hashedPassword;

    const newUser = await rentACarSystemDB.user.create({
      data: {
        ...userData,
        role_id: 2, // 2 is the default role for users [client role]
      },
    });

    delete newUser.password;

    return newUser;
  }
}
