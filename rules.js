module.exports = {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', //关闭禁止 console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', //关闭禁止 debugger
    "array-bracket-spacing": 0, //关闭强制数组方括号中使用一致的空格
    "camelcase": 0, //强制使用骆驼拼写法命名约定 
    "accessor-pairs": 0, //关闭强制 getter 和 setter 在对象中成对出现
    "array-callback-return": 0, //强制数组方法的回调函数中有 return 语句
    "block-scoped-var": 0, //关闭强制把变量的使用限制在其定义的作用域范围内
    "class-methods-use-this": 2, //强制类方法使用this, 否则写为静态函数
    "consistent-return": 0,//如果希望不同条件下返回
    "default-case": 2,  //要求 switch 语句中有 default 分支
    "dot-location": ["error", "property"],//允许你在成员表达式中的点操作符之前放置一个换行符
    // "eqeqeq": 2, //要求使用 === 和 !==
    "max-classes-per-file": 2, //强制每个文件中包含的的类的最大数量
    "no-alert": 2, //禁用 alert、confirm 和 prompt
    "no-empty-function": 2, //禁止空函数,若为空函数，可在函数体内写入注释解决报错
    "comma-dangle": 0, //要求末尾逗号
    "eol-last": 0, //要求文件末尾存在空行
    "lines-between-class-members": ["error", "always"], //该规则通过强制类成员间的空行来提高可读性
    "new-cap": 0, //要求构造函数首字母大写
    "space-before-function-paren": 0, //强制在 function的左括号之前使用一致的空格
    "no-useless-escape": 0, //该规则标记在不改变代码行为的情况下可以安全移除的转义
    "no-empty-pattern": 0, //此规则目的在于标记出在解构对象和数组中的任何的空模式
    "require-await": 2, //该规则对不包含 await 表达式的 async 函数发出警告
    "no-process-en": 0, //在整个项目中使用 process.env 从环境变量中检索值
    "switch-colon-spacing": 2, //强制在 switch 的冒号左右有空格,
    "no-var": 0, //禁止要求使用 let 或 const 而不是 var
    "no-void": 0, //可以使用 void 操作符
    "no-with": 2, //禁用 with 语句
    "no-unreachable": 2,//禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    "no-unneeded-ternary": 0, //可以在有更简单的可替代的表达式时使用三元操作符
    "no-this-before-super": 2, //禁止在构造函数中，在调用 super() 之前使用 this 或 super
}