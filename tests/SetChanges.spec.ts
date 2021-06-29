import SetChange from '../src/changes/SetChange'

describe('test basic behaviours', function () {
    it('should set and reset property value', function () {
        let change = new SetChange(0, 'x', 42)
        let obj = {}
        expect(change.forward(obj)).toEqual({ x: 42 })
        expect(obj).toEqual({ x: 42 })
        obj = {}
        expect(change.back(obj)).toEqual({ x: 0 })
        expect(obj).toEqual({ x: 0 })
    })
})