export interface IGetDetailsMovies {
  budget: number; //
  genres: Genre[]; //
  homepage: string; //
  id: number; //
  overview: string; //
  popularity: number; //
  poster_path: string; //
  release_date: Date;
  title: string; //
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
  id: number; //
  name: string; //
  profile_path: null | string; //
  character?: string; //
}
