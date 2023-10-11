import React, { useState } from "react";
import { img_300, unavailable } from "../components/config";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const MovieList = () => {
         
  const [page, setPage] = useState(1);


  const prevPage = () => {
    if (page >= 2) {
      setPage(page - 1);
    }
  };
  const {
    data: movies,
    isPending,
    error,
  } = useFetch(`
    https://api.themoviedb.org/3/discover/movie/?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=`);


  return (<>
  {!movies &&  <div className="text-center py-36">
    <span className="loading loading-dots loading-lg"></span>
  </div>}
  {error && <div>
<h1 className='text-4xl text-center py-20'>Error!!! Page Not Found Refresh or try Later;)</h1>
    </div>}
   {movies && <Link to={"search"}>
      <input
          type="text"
          placeholder="Search Movies"
          className=" mb-5  input input-bordered input-accent w-full max-w-xs"
        />
        </Link>}
    <ul className="grid lg:grid-cols-3 gap-x-20 gap-y-16 md:grid-cols-2 sm:grid-cols-1  ">
      {movies &&
        movies.map((Val) => {
          const {
            name,
            title,
            poster_path,
            first_air_date,
            release_date,
            media_type,
            id,
           
          } = Val;
          return (
              <li key={id} >
              <Link to={`movie/${title}`} >
                <div className="card  w-fill bg-base-100 shadow-xl hover:shadow-2xl hover:bg-stone-700">
                <figure className="px-10 pt-10">
                    <img
                      src={
                      poster_path ? `${img_300}/${poster_path}` : unavailable
                    }
                     
                      className="rounded-xl"
                      alt={title || name}
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{title || name}</h2>
                    <p className="font-bold"><span className=" font-normal">Category:</span>{media_type === "tv" ? "TV Series" : "Movie"}</p>
                    <p className="font-bold"> <span className="font-normal">Released Date:</span>{first_air_date || release_date}</p>
                    <div className="card-actions ">
                    </div>
                  </div>
                </div>
                </Link>
              </li>
              
          );
        })}
    
   </ul> 
   {movies && <div className="join lg:ml-[500px] mt-5  md:ml-[370px]  ">
        <Link className="join-item btn" onClick={prevPage}>
          «
        </Link>
        <button className="join-item btn">{page}</button>
        <Link className="join-item btn" onClick={() => setPage(page + 1)}>
          »
        </Link>
      </div>}
   </>
   );
};

export default MovieList;
