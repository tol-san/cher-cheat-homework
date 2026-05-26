import { NextResponse } from "next/server";

const PRODUCTS_API_URL = `${process.env.ISHOP_API_BASE_URL}/products`;

export async function GET() {
  try {
    const response = await fetch(PRODUCTS_API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch products" },
        { status: response.status },
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Unable to fetch products" },
      { status: 500 },
    );
  }
}
