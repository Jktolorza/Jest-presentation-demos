import { FakeAuthentication } from '../fakes'
describe('Fake', () => {
    let fakeAuth
    beforeEach(() => {
        fakeAuth = new FakeAuthentication();
    });

    it('test fakeAuth pass', () => {
        const payload = {
            username: 'Bob',
            password: 'Ross'
        };

        fakeAuth.authenticate(payload);
        expect(fakeAuth.isAuthenticated).toEqual(true);
    });

    it.skip('test fakeAuth fail', () => {
        const payload = {
            username: 'Noss',
            password: 'Coss'
        };

        fakeAuth.authenticate(payload);
        expect(fakeAuth.isAuthenticated).toEqual(true);
    });
})
