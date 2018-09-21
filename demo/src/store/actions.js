import axios from 'axios'

export default {
    getNews(context) {
        axios({
            method: 'get',
            url: '/api/4/news/latest'
        }).then((res) => {
            console.log(res, 'res');
            context.commit('getLatestNews', res.data.stories);
        }).catch((err) => {
            console.log(err);
        }); 
    }
}