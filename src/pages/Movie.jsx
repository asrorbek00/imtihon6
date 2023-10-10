import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { img_300, img_500, unavailable } from "../components/config";
import {BsCalendarDate} from 'react-icons/bs'
const Movie = () => {
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/search/movie?api_key=3d820eab8fd533d2fd7e1514e86292ea&query=${id}`;
  const { data: movies, isPending, error } = useFetch(url);
  return (
    <>
      <div className="grid grid-cols-1 gap-3">
        {movies &&
          movies.map((Val) => {
            const {
              name,
              title,
              poster_path,
              first_air_date,
              overview,
              release_date,
              popularity,
              vote_count,
              media_type,
              id,
              original_language
            } = Val;
            return (
              <div className="card w-fill bg-base-100 shadow-xl image-full" key={id}>
                <figure>
                  <img
                    src={
                      poster_path? `${img_500}/${poster_path}`
                        : unavailable
                    }
                    alt={title || name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">{title || name}</h2>
                  <p className="font-bold"><span className="font-normal text-red-400">Overview:   </span>{overview}</p>
                  <p className="font-bold">
                    <span className="font-normal text-slate-400">Popularity:</span>
                    {popularity}
                  </p>
                  <p className="font-bold">
                    <span className="font-normal text-green-300">Vote Count:</span>
                    {vote_count}
                  </p>
                  <p className="font-bold"><span className=" font-normal text-red-500">Category:</span>{media_type === "tv" ? "TV Series" : "Movie"}</p>
                  <p className="font-bold "><span className="font-normal text-green-500">Original Language:</span>{original_language}</p>
                  <p className="flex gap-2 text-orange-700"><span className="text-white"><BsCalendarDate size={25}/></span>{release_date}</p>
                  
                  <div className="card-actions justify-end">
                    <Link to={"/"} className="btn btn-primary">Back</Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Movie;
