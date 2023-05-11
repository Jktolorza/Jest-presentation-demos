export interface Counter {
    count: number;
    getCount: () => number;
    getCountText: () => string;
}

const myCounter: Counter = {
    count: 0,
    getCount: function () {
        return this.count;
    },
    getCountText: function () {
        const count = this.getCount();
        if (count > 10) {
            return 'More than 10';
        } else {
            return count.toString();
        }
    }
};
// Generamos un stub para controlar el comportamiento del metodo getCount
// para que siempre retorne 20 sin importar que
jest.spyOn(myCounter, 'getCount').mockReturnValue(20);
expect(myCounter.getCountText()).toEqual('More than 10');
// A modo de spy, checkeamos si este metodo fue llamado
expect(myCounter.getCount).toHaveBeenCalled();