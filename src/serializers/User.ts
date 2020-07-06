import { AbstractSerializer } from './AbstractSerializer';

interface TotalCountInterface {
    totalCount: number;
}

export interface UserInnerInterface {
    avatarUrl: string;
    login: string;
    id: string;
    bio?: string;
    location?: string;
    name?: string;
    websiteUrl?: string;
    twitterUsername?: string;
    repositories?: TotalCountInterface & {
        nodes: {
            name: string;
            stargazers: TotalCountInterface;
            url: string;
        }[]
    };
    pullRequests?: TotalCountInterface;
    followers?: TotalCountInterface;
}

export interface UserOutterInterface {
    avatar?: string;
    bio?: string;
    countFollowers?: number;
    countPullRequest?: number;
    countRepositories?: number;
    location?: string;
    name?: string;
    popularRepository?: {
        name: string;
        stars: number;
        url: string;
    };
    twitter?: string;
    username: string;
    website?: string;
}

export class User extends AbstractSerializer {
    avatar?: string;
    bio?: string;
    countFollowers?: number;
    countPullRequest?: number;
    countRepositories?: number;
    location?: string;
    name?: string;
    popularRepository?: {
        name: string;
        stars: number;
        url: string;
    };
    twitter?: string;
    username: string;
    website?: string;

    constructor() {
        super();
        this.username = '';
    }

    serialize(props: UserInnerInterface) {
        super.serialize(props);
        this.avatar = props.avatarUrl;
        this.bio = props.login;
        this.countFollowers = props.followers?.totalCount;
        this.countPullRequest = props.pullRequests?.totalCount;
        this.countRepositories = props.repositories?.totalCount;
        this.location = props.location;
        this.name = props.name;
        this.popularRepository = {
            name: props.repositories?.nodes[0].name || '',
            stars: props.repositories?.nodes[0].stargazers.totalCount || 0,
            url: props.repositories?.nodes[0].url || '',
        };
        this.twitter = props.twitterUsername;
        this.username = props.login;
        this.website = props.websiteUrl;
        return this;
    }
}
