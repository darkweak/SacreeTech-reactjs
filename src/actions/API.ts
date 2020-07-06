import axios from 'axios';
import { UserInnerInterface } from '../serializers';

type NodeType = UserInnerInterface;

const getHeaders = (): Record<string, string> => {
    return {
        Accept: '*/*',
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        'Content-Type': 'application/json'
    };
};

export class API {
    endpoint = '';
    model?: any = undefined;

    request() {
        return axios.create({
            baseURL: 'https://api.github.com/graphql',
            headers: getHeaders()
        });
    }

    async searchRequest(data: { query: string }) {
        return this.request().post(
            `${this.endpoint}`,
            data
        ).then(({data: {data: {search: {userCount, edges}}}}) => this.model?.getMany(edges.map(({node}: { node: NodeType }) => node)));
    }

    async findRequest(data: { query: string }) {
        return this.request().post(
            `${this.endpoint}`,
            data
        ).then(({ data: { data } }) => data);
    }
}
