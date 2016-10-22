'use strict'

/**
 *  使用Mocha、Chai进行单元测试。
 *
 *  TDD(assert)
 *  BDD(expect,should)
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

    // .isNaN
    it('不是数字', function() {
        assert.isNaN('foo', 'foo不是数字');
    });

    // .isNotNaN
    it('是数字', function() {
        assert.isNotNaN(4, '4是数字');
    });

    //.isUndefined(value, [message])
    it('未定义的', function() {
        let tea;
        assert.isUndefined(tea, 'tea未定义');
    });

    // .isDefined(value, [message])
    it('定义的', function() {
        let tea = 'green';
        assert.isDefined(tea, 'tea定义了');
    });

    // .isFunction(value, [message])
    it('是方法', function() {
        function a() {};
        assert.isFunction(a, 'a是一个方法');
    });

    // .isNotFunction(value, [message])
    it('不是方法', function() {
        let a = 'foo';
        assert.isNotFunction(a, 'a不是一个方法');
    });

    // .isObject(value, [message])
    // .isNotObject(value, [message])
    // .isArray(value, [message])
    // .isNotArray(value, [message])
    // .isString(value, [message])
    // .isNotString(value, [message])
    // .isNumber(value, [message])
    // .isNotNumber(value, [message])
    // .isBoolean(value, [message])
    // .isNotBoolean(value, [message])

    // .typeOf(value, name, [message])
    it('是指定的类型', function() {
        let tea = 'foo';
        assert.typeOf(tea, 'String', 'tea是String类型');
    });

    // .notTypeOf(value, name, [message])

    // .instanceOf(object, constructor, [message])
    it('是一个接口的实例', function() {
        let Tea = function(name) {
                this.name = name;
            },
            green = new Tea('chai');
        assert.instanceOf(green, Tea, '是一个实例')
    });

    // .notInstanceOf(object, constructor, [message])

    // .include(haystack, needle, [message])
    it('包含', function() {
        assert.include('foobar', 'bar', 'foobar包含bar');
    });

    // .notInclude(haystack, needle, [message])

    // .match(value, regexp, [message])
    it('匹配正则', function() {
        assert.match('foobar', /^foo/, '是foo开头');
    });

    // .notMatch(value, regexp, [message])

    // .property(object, property, [message])
    it('对象有这个属性', function() {
        assert.property({
            tea: ['green', 'chai']
        }, 'tea');
    });

    // .notProperty(object, property, [message])

    // .deepProperty(object, property, [message])
    it('对象内有这个属性', function() {
        assert.deepProperty({
            tea: {
                green: 'matcha'
            }
        }, 'tea.green');
    });

    // .notDeepProperty(object, property, [message])

    // .propertyVal(object, property, value, [message])
    it('对象的属性是这个值', function() {
        assert.propertyVal({
            tea: 'is good'
        }, 'tea', 'is good');
    });

    // .propertyNotVal(object, property, value, [message])
    // .deepPropertyVal(object, property, value, [message])
    // .deepPropertyNotVal(object, property, value, [message])

    // .lengthOf(object, length, [message])
    it('长度', function() {
        assert.lengthOf([1, 2, 3], 3, 'array has length of 3');
        assert.lengthOf('foobar', 6, 'string has length of 6');
    });

    // 未能运行成功。
    // 
    // .throws(function, [constructor/string/regexp], [string/regexp], [message])
    // it('是异常', function() {
    //     let fn = function() {
    //         return new Error();
    //     };
    //     assert.throws(fn, 'function throws a reference error');
    //     assert.throws(fn, /function throws a reference error/);
    //     assert.throws(fn, ReferenceError);
    //     assert.throws(fn, ReferenceError, 'function throws a reference error');
    //     assert.throws(fn, ReferenceError, /function throws a reference error/)
    // });

    // .operator(val1, operator, val2, [message])
    it('符合指定操作', function() {
        assert.operator(1, '<', 2, 'everything is ok');
        // assert.operator(1, '>', 2, 'this will fail');
    });

    // .closeTo(actual, expected, delta, [message])
    it('加减除计算', function() {
        assert.closeTo(1.5, 1, 0.5, 'numbers are close');
    });

    // .approximately(actual, expected, delta, [message])
    // 与.closeTo类似

    // .sameMembers(set1, set2, [message])
    it('对比', function() {
        assert.sameMembers([1, 2, 3], [2, 1, 3], 'same members');
    });

    // .sameDeepMembers(set1, set2, [message])
    it('深入对比', function() {
        assert.sameDeepMembers([{
            b: 3
        }, {
            a: 2
        }, {
            c: 5
        }], [{
            c: 5
        }, {
            b: 3
        }, {
            a: 2
        }], 'same deep members');

    });

    // .includeMembers(superset, subset, [message])
    it('包含对比', function() {
        assert.includeMembers([1, 2, 3], [2, 1], 'include members');
    });

    // .includeDeepMembers(superset, subset, [message])

    // .oneOf(inList, list, [message])
    it('一个非对象，非数组的值存在于指定数组中', function() {
        assert.oneOf(1, [2, 1], 'Not found in list');
    });

    // .changes(function, object, property)
    it('函数改变了对象的属性值', function() {
        let obj = {
            val: 10
        };
        let fn = function() {
            obj.val = 22
        };
        assert.changes(fn, obj, 'val');

    });

    // .doesNotChange(function, object, property)

    // .increases(function, object, property)
    it('函数添加了对象的属性', function() {
        let obj = {
            val: 10
        };
        let fn = function() {
            obj.val = 13
        };
        assert.increases(fn, obj, 'val')
    });

    // .doesNotIncrease(function, object, property)

    // .decreases(function, object, property)
    it('函数减少了对象的属性', function() {
        let obj = {
            val: 10
        };
        let fn = function() {
            obj.val = 5
        };
        assert.decreases(fn, obj, 'val');
    });

    // .doesNotDecrease(function, object, property)

    // ifError(object)
    it('自定义一个错误', function() {
        let err = new Error('I am a custom error');
        // assert.ifError(err);
    });

    // isExtensible(object)
    it('是一个扩展', function() {
        assert.isExtensible({})
    });

    // .isNotExtensible(object)

    // isSealed(object)
    it('是一个密封对象，任何情况无法被修改', function() {
        let sealedObject = Object.seal({});
        let frozenObject = Object.seal({});
        assert.isSealed(sealedObject);
        assert.isSealed(frozenObject);
    });

    // .isNotSealed(object)
    it('是一个冻结对象，任何情况无法被修改', function() {
        let frozenObject = Object.freeze({});
        assert.frozen(frozenObject);
    });

    // .isNotFrozen(object)
});

describe('Expect风格', function() {

});
