import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SignUp from '../components/SignUp'


const Login: NextPage = () => {
    const {data:session, status} = useSession();
    const router = useRouter()

    useEffect (() => {
        if (session){
            // redirect to home
            router.push({
                pathname: "/",
            });
        }
        return () => {};
    }, []);

if (status === 'loading') return <p>Loading</p>

if (!session)
  return (
   <>
   <SignUp  />
   
   </>



  
  )
}

export default Login