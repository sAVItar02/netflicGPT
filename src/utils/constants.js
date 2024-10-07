export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PROFILE_ICON = "https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";
export const LOGIN_PAGE_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_K
    }
}

export const NOW_PLAYING_API = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const POPULAR_API = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TOP_RATED_API = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const UPCOMING_API = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/original";

export const STUFF = `${process.env.REACT_APP_GEM_K}`;