import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const limit = searchParams.get("limit") || "10";

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_COINMARKETCAP_BASE_URL}/v1/cryptocurrency/listings/latest?limit=${limit}&convert=USD`,
		{
			headers: {
				"X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY!,
			},
			next: { revalidate: 60 },
		}
	);

	const data = await res.json();
	return NextResponse.json(data.data);
}
