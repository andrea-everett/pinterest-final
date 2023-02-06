// import { format } from "date-fns"
import Pin from "./Pin"

export default function Article({ id, urls, user, created_at, likes }) {
  return (
    <>
      <div className="">
        <article key={id} className="rounded-3xl inline-block w-full">
        <div className="image_hovers relative">
            <div className="save text-transparent hover:bg-red-700 hover:text-white hover:rounded-full hover:p-3 hover:w-15 absolute right-3 top-2 ">Save</div>
          <img
              src={urls.regular}
              alt={user.username}
              className="rounded-lg block w-full h-full"   
            />
        </div>
     
       

          <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
            <article className="flex items-center justify-start">
              <ul>
                <li className="text-slate-800 font-bold">{user.name}</li>
                <li className="text-sm text-slate-800 opacity-75">
                  {/* {format(new Date(created_at), "dd MMMM yyyy")} */}
                </li>
              </ul>
            </article>

            <article className="mt-5 md:mt-0">
              <a
                href={`https://instagram.com/${user.instagram_username}`}
                className="text-sm text-slate-800 opacity-75 underline"
                target="_blank"
                rel="noreferrer"
              >
                {user.instagram_username}
              </a>
            </article>
          </div>
        </article>
      </div>
    </>
  )
}