import axios from 'axios';


const getMostPopular = () => {

    const mostPopularOption = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-most-popular-tv-shows',
        params: {homeCountry: 'US', purchaseCountry: 'US', currentCountry: 'US'},
        headers: {
          'x-rapidapi-key': 'd1b3966901mshd2f7b6a49ab9a7ap1966b9jsne442eb931159',
          'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
      };

      const mostPopular = _getContent(mostPopularOption);
      console.log(mostPopular)

}
  
const getTitle = (titleId: string) => {

    const titleOption =  {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/get-details',
    params: {tconst: titleId},
    headers: {
      'x-rapidapi-key': 'd1b3966901mshd2f7b6a49ab9a7ap1966b9jsne442eb931159',
      'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
  }

  const title = _getContent(titleOption);
  console.log(title);

};



  const _getContent = async (options: {}) => {
    try {
      const res = await axios.request(options)
        console.log(res);
        return res;
    } catch (err) {
      console.log(err);
    }
  };



export const contentService = {
    getMostPopular,
    getTitle
}