import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import { getCurrentUser } from '@aws-amplify/auth/server';
import outputs from '../amplify_outputs.json';
import { cookies } from 'next/headers';

export const { runWithAmplifyServerContext } = createServerRunner({
    config: outputs
})

export async function getAuthCurrentUserServer() {
    try{
        const currentUser = await runWithAmplifyServerContext({
            nextServerContext: {cookies},
            operation: (context) => getCurrentUser(context)
        })
        return currentUser
    }catch(err){
        console.log(err)
    }
}