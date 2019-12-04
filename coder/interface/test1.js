module.exports = {
    name: '模块一',
    model: [
        {
            path: '/aaa', //接口名称
            title: '接口一', //接口中文名称
            name: 'aaa', 
            methods: false, 
            option: {
                method: 'get' // 请求的方法
            },
            state: 'aaa'  // 调用接口时的请求方法
        },
        {
            path: '/bbb',
            title: '接口二',
            name: 'bbb',
            methods: false,
            state: 'bbb'
        }
    ]
}