import {link, NA, NOBIOTEXT} from './variables'

const getData = (username) => {
    return Promise.resolve(
        fetch(`${link}${username}`)
            .then((resp) => resp.json())
            .then((json) => {

                let data = {};
                

                const transformDate = (date) =>
                    new Date(date).toLocaleDateString("en-EN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                    });

                const repackData = (json) => {
                    data.status = "found";
                    data.avatar_url = json.avatar_url;
                    data.fullname = json.name || username;
                    data.username = `@${username}`;
                    data.created_at = `Joined ${transformDate(
                        json.created_at
                    )}`;
                    data.bio = json.bio || NOBIOTEXT;
                    data.public_repos = json.public_repos;
                    data.followers = json.followers;
                    data.following = json.following;
                    data.location = json.location || NA;
                    data.blog = json.blog || NA;
                    data.twitter_username = json.twitter_username || NA;
                    data.twitter_link = json.twitter_username
                        ? `https://twitter.com/${data.twitter_username}`
                        : "";
                    data.company = json.company ? json.company.slice(1) : NA;
                    data.company_link = json.company
                        ? `https://github.com/${data.company}`
                        : "";

                    return data;
                };

                if (json.message) {
                    data.status = "not found";
                    return data;
                }

                return repackData(json)
            }).catch(err => {
                let data = {}
                data.status = 'error'
                return data
            })
    );
};

export default getData;