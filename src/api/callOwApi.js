import axios from 'axios'

const STATS_URL = 'http://owapi.io/stats/pc/us'
const PROFILE_URL = 'http://owapi.io/profile/pc/us/'

export async function getUserStats (username) {
  //TODO Add error handling, if $ in string instead of -
  //Deploy as a Lambda & attach to API gateway
  let response
  let userData
  
  try {
    response = await axios.get(`${STATS_URL}/${username}`)

    //Selecting just the top 5 heroes for now
    userData = response.data.stats.top_heroes.quickplay.played.slice(0,5)
  } catch (error) {
    console.error(error)
  }
  console.log('returning from API ', userData)
  return userData
}

const getHeroData = async () => {
  let heroData;
  try {
    heroData = await axios.get('https://best-overwatch-api.herokuapp.com/heroes')
  } catch (error) {
    console.error(error)
  }

    return heroData.data
}

export default {
  getUserStats
}