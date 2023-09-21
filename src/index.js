/**
 * @description: 延迟触发函数，防抖函数，可用于按钮点击，避免用户短时间大量点击按钮
 * @param {*} delay 延迟时间
 * @param {*} callback 回调方法
 * @return {*} 回调方法
 */
export function debounce(delay,callback){
    let task;
    return function(){
        clearTimeout(task);
        task = setTimeout(()=>{
            callback(this,arguments)
        },delay)
    }
}

/**
 * @description: 保留小数点以后几位，默认2位
 * @param {*} number 传入数值
 * @param {*} no 保留几位小数
 * @return {*} 处理过的数值
 */
export function cutNumber(number, no = 2) {
    if (typeof number != 'number') {
        number = Number(number)
    }
    return Number(number.toFixed(no))
}
