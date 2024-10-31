"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const tasks = [
        "牛乳を買いに行く",
        "部屋の掃除をする",
        "実家へ電話をかける",
        "お茶を買いに出かける"
    ];
    await Promise.all(tasks.map((task) => {
        console.log(`Creating task: ${task}`);
        return prisma.task.create({
            data: {
                title: task
            }
        });
    }));
}
main()
    .catch((e) => {
    console.error(e);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map