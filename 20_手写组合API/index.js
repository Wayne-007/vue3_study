// shallowReactive（浅的劫持，浅的监视，浅的响应数据）与 reactive（深的）

const handleReactive = {
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
        return new Proxy(target, handleReactive)
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
        return new Proxy(target, handleReactive)
    }
    // 如果传入的是基本类型数据，就直接返回
    return target
}
