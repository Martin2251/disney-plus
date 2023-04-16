
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HomeLayout from '../components/HomeLayout';


 export default  function Home (){

  const {data:session, status} = useSession();
    const router = useRouter()

    useEffect (() => {
        if (session){
            // redirect to home
            router.push({
                pathname: "/login",
            });
        }
        return () => {};
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

if (status === 'loading') return <p>Loading</p>

if (!session)
  return (
   <>
      <HomeLayout  />

   </>
  
  )
}


