import { testModel } from "../models/testModel";
import { dbConnect } from "../middleware/dbConnect";

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const PositioningElementsGetData = await testModel.find({});
				res
					.status(200)
					.json({ success: true, data: PositioningElementsGetData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			try {
				const PositioningElementsPostData = await testModel.create(req.body);
				res
					.status(201)
					.json({ success: true, data: PositioningElementsPostData });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
