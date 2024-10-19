import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


export default {
	async fetch(request, env, ctx): Promise<Response> {
		const prisma = new PrismaClient().$extends(withAccelerate());
		await prisma.log.create({ 
			data : {
				level : "info",
				message : `${request.method} ${request.url}`,
				meta : {
					headers : JSON.stringify(request.headers)
				}
			}
		});

		const { data, info } = await prisma.log.findMany({
			take: 20,
			orderBy: {
				id : "desc"
			}
		}).withAccelerateInfo();

		console.log("data\n",data);
		console.log("\ninfo\n",info);

		return new Response(`request method: ${request.method}`);
	},
} satisfies ExportedHandler<Env>;
