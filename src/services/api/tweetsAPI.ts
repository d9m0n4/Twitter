import axios from 'axios';
import { TweetsState } from '../../store/ducks/tweets/contracts/state';

export const TweetsApi = {
  fetchTweets(): Promise<TweetsState['items']> {
    return axios.get('https://trycode.pw/c/L9XZL.json').then(({ data }) => data);
  },
};
