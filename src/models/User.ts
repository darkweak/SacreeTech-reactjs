import { User, UserInnerInterface, UserOutterInterface } from '../serializers';

class UserInstance {
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

    constructor(props: UserOutterInterface) {
        this.avatar = props.avatar;
        this.bio = props.bio;
        this.countFollowers = props.countFollowers;
        this.countPullRequest = props.countPullRequest;
        this.countRepositories = props.countRepositories;
        this.location = props.location;
        this.name = props.name;
        this.popularRepository = props.popularRepository;
        this.twitter = props.twitter;
        this.username = props.username;
        this.website = props.website;
    }
}

export class UserModel {
    serializer = new User();

    getMany(users: UserInnerInterface[]): UserOutterInterface[] {
        return users.map(u => new UserInstance(this.serializer.serialize(u)))
    }
    getOne(user: UserInnerInterface): UserOutterInterface {
        return new UserInstance(this.serializer.serialize(user))
    }
}
