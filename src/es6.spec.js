const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается корректно', () => {
            const dic = new core.Dictionary();
            assert.strictEqual(!!dic, true);
        });


        it('размер словаря изменяется корректно', () => {
            const dic = new core.Dictionary();
            dic.addWord("свет", "light")
            dic.addWord("муха", "fly")
            dic.addWord("кот", "cat")
            assert.strictEqual(dic.getSize(), 3)
            dic.deleteWord("кот")
            assert.strictEqual(dic.getSize(), 2)
        })

        it('В словарь не добавляется некорректная информация', () => {
            const dic = new core.Dictionary();
            dic.addWord("свет", "light")
            dic.addWord("муха", "fly")
            dic.addWord("кот", 2)
            assert.strictEqual(dic.getSize(), 2)
        })

        it('массив ключей генерируется корректно', () => {
            const dic = new core.Dictionary();
            dic.addWord("свет", "light")
            dic.addWord("муха", "fly")
            dic.addWord("кот", "cat")
            assert.deepStrictEqual(dic.getAllWords(), ["свет", "муха", "кот"])
        })
    });
});