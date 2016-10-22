'use strict'

/**
 *  使用Mocha、Chai进行单元测试。
 */
const chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

let data = 'assert',
    datas = {
        tea: ['chai', 'matcha', 'oolong']
    };

describe('Assert风格', function() {
    // assert(expression, message);
    // expression 表述的事实。
    // message 错误时显示的信息。
    it('基本', function() {
        assert(data == 'assert', 'data is not assert');
    });

    // .fail(actual,expected,[message],[operator])
    // 这个由Nodejs自有assert模块来维护。
    // 
    // it('.fail', function() {
    //     assert.fail('assert', 'assert', 'a error');
    // });


    // .isOK(object,[message])
    it('通过', function() {
        assert.isOk('everything', 'everything is ok');
    });

    // .isNotOk(object, [message])
    it('不通过', function() {
        assert.isNotOk(false, 'this will pass');
    });

    // .equal(actual, expected, [message])
    it('存在', function() {
        assert.equal(data, 'assert');
    });

    // .notEqual(actual, expected, [message])
    it('不存在', function() {
        assert.notEqual(data, 'mo', 'data equal mo');
    });

    // .strictEqual(actual, expected, [message])
    it('严格判断存在', function() {
        assert.strictEqual(true, true, 'not');
    });

    // .notStrictEqual(actual, expected, [message])
    it('严格判断不存在', function() {
        assert.notStrictEqual(datas, 'expected', 'data equal expected');
    });

    // .deepEqual(actual, expected, [message])
    it('深入存在', function() {
        assert.deepEqual({
            tea: 'matcha'
        }, {
            tea: 'matcha'
        }, 'datas not equal mocha');
    });

    // .notDeepEqual(actual, expected, [message])
    it('深入不存在', function() {
        assert.notDeepEqual({
            tea: 'green'
        }, {
            tea: 'mocha'
        }, 'data equal mocha');
    });

    // .isAbove(valueToCheck, valueToBeAbove, [message])
    it('大于', function() {
        assert.isAbove(5, 2, '5应该大于2');
    });

    // .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
    it('大于或等于', function() {
        assert.isAtLeast(2, 2, '2大于或等于2');
    });

    // .isBelow(valueToCheck, valueToBeBelow, [message])
    it('小于', function() {
        assert.isBelow(3, 6, '3应该小于6');
    });

    // .isAtMost(valueToCheck, valueToBeAtMost, [message])
    it('小于或等于', function() {
        assert.isAtMost(3, 3, '3小于或等于3');
    });

    // .isTrue(value, [message])
    it('真', function() {
        assert.isTrue(true, '茶已送达');
    });

    // .isNotTrue(value, [message])
    it('不是真', function() {
        assert.isNotTrue('tea', '的确不是真的');
    });

    // .isFalse(value, [message])
    it('假', function() {
        assert.isFalse(false, '茶未到');
    });

    // .isNotFalse(value, [message])
    it('不是假', function() {
        assert.isNotFalse('tea', '的确不是假的');
    });

    // .isNull(value, [message])
    it('空的', function() {
        assert.isNull(null, '空的');
    });

    // .isNotNull(value, [message])
    it('不是空的', function() {
        assert.isNotNull('tea', '不是空的');
    });
});
