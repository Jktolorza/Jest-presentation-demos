import { Counter } from '../stub&spy'
describe('Stub & Spy', () => {
    let myCounter: Counter
    beforeEach(() => {
        myCounter = {
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
    });

    it('test stub&spy', () => {
        jest.spyOn(myCounter, 'getCount').mockReturnValue(20);
        expect(myCounter.getCountText()).toEqual('More than 10'); 
        // A modo de spy, checkeamos si este metodo fue llamado
        expect(myCounter.getCount).toHaveBeenCalled();
    });

})
