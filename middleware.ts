import { fetchAuthSession } from "@aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "./utils/utils";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
        const response = NextResponse.next();
        
        const authenticated = await runWithAmplifyServerContext({
            nextServerContext: {request, response},
            operation: async (context) => {
                try{
                    const session = await fetchAuthSession(context, {})
                    return session.tokens !== undefined
                }catch(err){
                    console.log(err)
                    return false
                }
            }
        })
        if(authenticated){
            return response
        }else{
            return NextResponse.redirect(new URL('/signup', request.url))
        }
    }

    export const config = {
        matcher: ["/((?!api|_next/static|_next/image|favicon.ico|signup).*)"],
    }