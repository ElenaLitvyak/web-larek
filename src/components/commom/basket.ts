interface IBasketModel {
    items: Set<string>;
    add(id: string): void;
    remove(id: string): void;
}

interface IEventEmitter {
    emit: (event: string, data: unknown) => void
}


class BasketModel implements IBasketModel {
    constructor(protected events: IEventEmitter) {}
    items: Set<string> = new Set();

    add(id: string): void {
        this.items.add(id);
        this._changed();
    }

    remove(id: string): void {
        this.items.delete(id);
        this._changed();
    }

    protected _changed() {
        this.events.emit('basket:change', {items: Array.from(this.items.keys())})
    }
}