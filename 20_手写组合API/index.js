// shallowReadonly和readonly
const readonlyHandler = {
    get(target, prop) {
        const result = Reflect.get(target, prop)
        console.log('拦截了 读取 数据', target, prop)
        return result
    },
    set(target, prop, value) {
        console.warn('只能 读取，不能写入', target, prop, value)
        return true
    },
    deleteProperty(target, prop) {
        console.warn('只能 读取，不能删除', target, prop)
        return true
    }
}


function shallowReadonly(target) {
    if (target && typeof target === 'object') {
        return new Proxy(target, readonlyHandler)
    }
    return target
}

function readonly(target) {
    if (target && typeof target === 'object') {
        if (Array.isArray(target)) {
            target.forEach((item, index) => {
                target[index] = readonly(item)
            })
        } else {
            Object.keys(target).forEach(key => {
                target[key] = readonly(target[key])
            })
        }
        return new Proxy(target, readonlyHandler)
    }
    return target

}


// shallowReactive（浅的劫持，浅的监视，浅的响应数据）与 reactive（深的）
const reactiveHandler = {
    get(target, prop) {
        const result = Reflect.get(target, prop)
        console.log('拦截了 读取 数据', target, prop, result)
        return result
    },
    set(target, prop, value) {
        const result = Reflect.set(target, prop, value)
        console.log('拦截了 设置 数据', target, prop, value, result)
        return result

    },
    deleteProperty(target, prop) {
        const result = Reflect.deleteProperty(target, prop)
        console.log('拦截了 删除 数据', target, prop, result)
        return result
    }
}

function shallowReactive(target) {
    // 判断当前的目标书不是object类型（数组/对象）
    if (target && typeof target === 'object') {
        return new Proxy(target, reactiveHandler)
    }
    // 如果传入的是基本类型数据，就直接返回
    return target
}

function reactive(target) {
    // 判断当前的目标书不是object类型（数组/对象）
    if (target && typeof target === 'object') {
        // 对数组 / 对象中的所有数据进行递归处理， 用于监听
        if (Array.isArray(target)) {
            target.forEach((item, index) => {
                target[index] = reactive(item)
            })
        } else {
            Object.keys(target).forEach(key => {
                target[key] = reactive(target[key])
            })
        }
        return new Proxy(target, reactiveHandler)
    }
    // 如果传入的是基本类型数据，就直接返回
    return target
}


// shallowRef和ref
function shallowRef(target) {
    return {
        _value: target,
        get value() {
            console.log('劫持 读取 数据')
            return this._value
        },
        set value(val) {
            console.log('劫持 写入 数据，准备更新页面')
            this._value = val
        }
    }
}

function ref(target) {
    target = reactive(target)
    return {
        _value: target,
        get value() {
            console.log('劫持 读取 数据')
            return this._value
        },
        set value(val) {
            console.log('劫持 写入 数据，准备更新页面')
            this._value = val
        }
    }
}
