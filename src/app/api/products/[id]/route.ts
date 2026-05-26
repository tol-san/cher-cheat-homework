import { NextResponse } from "next/server";

const PRODUCTS_API_URL = `${process.env.ISHOP_API_BASE_URL}/products`;

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const response = await fetch(
      `${PRODUCTS_API_URL}/${encodeURIComponent(params.id)}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch product" },
        { status: response.status },
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch product" },
      { status: 500 },
    );
  }
}
