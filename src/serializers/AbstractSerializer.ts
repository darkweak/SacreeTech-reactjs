export abstract class AbstractSerializer {
    id: string;

    constructor() {
        this.id = '';
    }

    serialize({id}: {id: string}) {
        this.id = id;
    }
}
