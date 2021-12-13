const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '1517e027573aec9c5d2ef1a9dff2842c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;