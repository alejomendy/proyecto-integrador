import { NextResponse } from 'next/server'
import connection from '../../BD/bd'


export function GET() {
    const cone = connection() 
    return NextResponse.json("cone")
}







