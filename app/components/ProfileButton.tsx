import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfileButton() {
  const {data: Session} = useSession();
  
  return (
    <div className='bg-cyan-300 rounded-full cursor-pointer'>
      <p className='text-black'>
      {Session?.user?.image && (
          <Image
              src={Session.user.image}
              width={40}
              height={40}
              className="rounded-full"
              alt="user profile image"
          />
      )}
      </p>
    </div>
  )
}
