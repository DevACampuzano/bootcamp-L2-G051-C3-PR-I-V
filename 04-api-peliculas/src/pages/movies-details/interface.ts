export interface IGetDetailsMovies {
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  status: string;
  title: string;
  video: boolean;
}

export interface Genre {
  id: number;
  name: string;
}

export interface IGetCastDetails {
  id: number;
  cast: Cast[];
}

export interface Cast {
  adult: boolean;
  id: number;
  name: string;
  original_name: string;
  profile_path: null | string;
  character?: string;
}
