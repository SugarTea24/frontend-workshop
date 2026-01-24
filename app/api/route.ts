import { NextResponse } from "next/server";
export async function GET(){
    try{
        const res = await
        fetch("https://wilayah.web.id/api/provinces");
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            {message:"Gagal mengambil data provinsi"},
            {status: 500}
        );
    }
}
