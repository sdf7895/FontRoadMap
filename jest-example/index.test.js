const { sum, makeUser, makeRange } = require('./index');

/*
    말 그대로 코드가 얼마나 커버 되었는가 를 말한다
    코드의 구조를 이루는 것은 크게 구문 , 조건 , 결정 이다 
*/
describe('test index.js file', () => {
    it('sums a and b', () => {
        let result = sum(1,2);
        /* expect(테스트 해야할 함수) toBe 는 기대값 */
        expect(result).toBe(3);
        result = sum(3,4);
        expect(result).toBe(7);
    });
        /* toEqual 오브젝트 비교 테스트*/
    it('makes a person', () => {
        expect(makeUser('Yakuza',20)).toEqual({
            name:'Yakuza',
            age:20,
        });
    });
        /* toContain 배열안에 특정값이 포함되어 있는지 여부 확인 가능 함수 */
    it('has 3',() => {
        expect(makeRange(1,4)).toContain(2);
    });
});

// https://jestjs.io/docs/expect !!

