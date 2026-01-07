import { prisma } from "../lib/prisma.js";
export const sessionRepository = {
    async create(data) {
        return await prisma.session.create({ data });
    },
    async createEvent(data) {
        return await prisma.sessionEvent.create({ data });
    },
    async findAll() {
        return await prisma.session.findMany();
    },
};
//# sourceMappingURL=session.repository.js.map