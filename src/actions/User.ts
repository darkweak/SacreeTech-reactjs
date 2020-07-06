import { API } from './API';
import { UserModel } from '../models/User';

export class User extends API {
    model = new UserModel();

    search({username}: { username: string }) {
        return this.searchRequest({
            query: `
                query {
                    search(query: "${username}", type: USER, last: 100) {
                        userCount
                            edges {
                                node {
                                ...on User {
                                    avatarUrl
                                    bio
                                    id
                                    location
                                    login
                                    name
                                    twitterUsername
                                    websiteUrl
                                }
                            }
                        }
                        userCount
                    }
                }
            `
        })
    }

    getOne({username}: { username: string }) {
        return this.findRequest({
            query: `
                query {
                    user(login: "${username}") {
                        repositories(first: 1, orderBy: {field: STARGAZERS, direction: DESC}) {
                            totalCount
                            nodes {
                                name
                                stargazers {
                                    totalCount
                                }
                                url
                            }
                        }
                        pullRequests {
                            totalCount
                        }
                        followers {
                            totalCount
                        }
                        avatarUrl
                        bio
                        id
                        location
                        login
                        name
                        twitterUsername
                        websiteUrl
                    }
                }
            `
        }).then(({user}) => this.model.getOne(user))
    }
}
