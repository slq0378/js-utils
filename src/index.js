/**
 * @description: 延迟触发函数，防抖函数，可用于按钮点击，避免用户短时间大量点击按钮
 * @param {*} delay 延迟时间
 * @param {*} callback 回调方法
 * @return {*} 回调方法
 */
export function debounce(delay, callback) {
  let task;
  return function () {
    clearTimeout(task);
    task = setTimeout(() => {
      callback(this, arguments);
    }, delay);
  };
}

/**
 * @description: 保留小数点以后几位，默认2位
 * @param {*} number 传入数值
 * @param {*} no 保留几位小数
 * @return {*} 处理过的数值
 */
export function cutNumber(number, no = 2) {
  if (typeof number != "number") {
    number = Number(number);
  }
  return Number(number.toFixed(no));
}
/**
 * @description:  是否是安卓手机
 * @return {*} true or false
 */
export function isAndroid() {
  const u = navigator.userAgent;
  return (
    u.indexOf("Android") > -1 ||
    u.indexOf("Linux") > -1 ||
    u.indexOf("Nokia") > -1
  );
}
/**
 * @description: 是否是iPhone 手机
 * @return {*}
 */
export function isIphone() {
  const u = navigator.userAgent;
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
// 是否是车牌号，简单版本
export function isCarNo(cardNum) {
  return /(^[\u4e00-\u9fa5]{1}[A-Z_a-z]{1}([A-Z_0-9_a-z]{5,6}|[A-Z_0-9_a-z]{4}[\u4e00-\u9fa5]{1}))$/.test(
    cardNum
  );
}
/**
 * @description: 复制内容到剪贴板
 * @param {*} value 内容
 * @return {*} 是否成功
 */
export function copyToBoard(value) {
  const element = document.createElement("textarea");
  document.body.appendChild(element);
  element.value = value;
  element.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
    document.body.removeChild(element);
    return true;
  }
  document.body.removeChild(element);
  return false;
}
/**
 * @description: 获取当前时间 2023-12-12 12:21:21
 * @return {*}
 */
export function getNowFormatDate() {
  let timeStamp = new Date();
  let year = new Date(timeStamp).getFullYear();
  let month =
    new Date(timeStamp).getMonth() + 1 < 10
      ? "0" + (new Date(timeStamp).getMonth() + 1)
      : new Date(timeStamp).getMonth() + 1;
  let date =
    new Date(timeStamp).getDate() < 10
      ? "0" + new Date(timeStamp).getDate()
      : new Date(timeStamp).getDate();
  let hh =
    new Date(timeStamp).getHours() < 10
      ? "0" + new Date(timeStamp).getHours()
      : new Date(timeStamp).getHours();
  let mm =
    new Date(timeStamp).getMinutes() < 10
      ? "0" + new Date(timeStamp).getMinutes()
      : new Date(timeStamp).getMinutes();
  let ss =
    new Date(timeStamp).getSeconds() < 10
      ? "0" + new Date(timeStamp).getSeconds()
      : new Date(timeStamp).getSeconds();
  return "" + year + "-" + month + "-" + date + " " + hh + ":" + mm + ":" + ss;
}

// 获取昨天的日期
export function getYesterdayDate() {
  let yesterday = new Date(new Date() - 1000 * 60 * 60 * 24);
  let year = new Date(yesterday).getFullYear();
  let month =
    new Date(yesterday).getMonth() + 1 < 10
      ? "0" + (new Date(yesterday).getMonth() + 1)
      : new Date(yesterday).getMonth() + 1;
  let day =
    new Date(yesterday).getDate() < 10
      ? "0" + new Date(yesterday).getDate()
      : new Date(yesterday).getDate();
  return year + "-" + month + "-" + day;
}

// 获取今天的日期
export function getTodayDate() {
  let timeStamp = new Date();
  let year = new Date(timeStamp).getFullYear();
  let month =
    new Date(timeStamp).getMonth() + 1 < 10
      ? "0" + (new Date(timeStamp).getMonth() + 1)
      : new Date(timeStamp).getMonth() + 1;
  let day =
    new Date(timeStamp).getDate() < 10
      ? "0" + new Date(timeStamp).getDate()
      : new Date(timeStamp).getDate();
  return year + "-" + month + "-" + day;
}

// 获取近三天的日期
export function getNearlyThreeDaysDate() {
  let yesterday = new Date(new Date() - 1000 * 60 * 60 * 24 * 3);
  let year = new Date(yesterday).getFullYear();
  let month =
    new Date(yesterday).getMonth() + 1 < 10
      ? "0" + (new Date(yesterday).getMonth() + 1)
      : new Date(yesterday).getMonth() + 1;
  let day =
    new Date(yesterday).getDate() < 10
      ? "0" + new Date(yesterday).getDate()
      : new Date(yesterday).getDate();
  return year + "-" + month + "-" + day;
}

// 获取近1周的日期
export function getNearlyWeekDate() {
  let yesterday = new Date(new Date() - 1000 * 60 * 60 * 24 * 7);
  let year = new Date(yesterday).getFullYear();
  let month =
    new Date(yesterday).getMonth() + 1 < 10
      ? "0" + (new Date(yesterday).getMonth() + 1)
      : new Date(yesterday).getMonth() + 1;
  let day =
    new Date(yesterday).getDate() < 10
      ? "0" + new Date(yesterday).getDate()
      : new Date(yesterday).getDate();
  return year + "-" + month + "-" + day;
}

// 获取近1月的日期
export function getNearlyMonthDate() {
  let daysInMonth = [
    [0],
    [31],
    [28],
    [31],
    [30],
    [31],
    [30],
    [31],
    [31],
    [30],
    [31],
    [30],
    [31],
  ];
  let year = new Date(new Date()).getFullYear();
  let day = new Date(new Date()).getDate();
  let month = new Date(new Date()).getMonth() + 1;
  if (year % 4 === 0 && year % 100 !== 0) {
    daysInMonth[2] = 29;
  }
  if (month - 1 === 0) {
    year -= 1;
    month = 12;
  } else {
    month -= 1;
  }
  day = daysInMonth[month] >= day ? day : daysInMonth[month];
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  return year + "-" + month + "-" + day;
}

// 获取近3月的日期
export function getNearlyThreeMonthDate() {
  let daysInMonth = [
    [0],
    [31],
    [28],
    [31],
    [30],
    [31],
    [30],
    [31],
    [31],
    [30],
    [31],
    [30],
    [31],
  ];
  let year = new Date(new Date()).getFullYear();
  let day = new Date(new Date()).getDate();
  let month = new Date(new Date()).getMonth() + 1;
  if (year % 4 === 0 && year % 100 !== 0) {
    daysInMonth[2] = 29;
  }
  if (month - 3 === 0) {
    year -= 1;
    month = 12;
  } else if (month - 2 === 0) {
    year -= 1;
    month = 11;
  } else if (month - 1 === 0) {
    year -= 1;
    month = 10;
  } else {
    month -= 3;
  }
  day = daysInMonth[month] >= day ? day : daysInMonth[month];
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  return year + "-" + month + "-" + day;
}

// 获取近半年的日期
export function getHalfYearDate() {
  let yesterday = new Date(new Date() - (365 / 2) * 1000 * 3600 * 24);
  let year = new Date(yesterday).getFullYear();
  let month =
    new Date(yesterday).getMonth() + 1 < 10
      ? "0" + (new Date(yesterday).getMonth() + 1)
      : new Date(yesterday).getMonth() + 1;
  let day =
    new Date(yesterday).getDate() < 10
      ? "0" + new Date(yesterday).getDate()
      : new Date(yesterday).getDate();
  return year + "-" + month + "-" + day;
}

// 获取近1年的日期
export function getNearlyOneYearDate() {
  let timeStamp = new Date();
  let year = new Date(timeStamp).getFullYear() - 1;
  let month =
    new Date(timeStamp).getMonth() + 1 < 10
      ? "0" + (new Date(timeStamp).getMonth() + 1)
      : new Date(timeStamp).getMonth() + 1;
  let day =
    new Date(timeStamp).getDate() < 10
      ? "0" + new Date(timeStamp).getDate()
      : new Date(timeStamp).getDate();
  return year + "-" + month + "-" + day;
}

// 一天的开始时间
export function startTime(time) {
  const nowTimeDate = new Date(time);
  return nowTimeDate.setHours(0, 0, 0, 0);
}

// 一天的结束时间
export function endTime(time) {
  const nowTimeDate = new Date(time);
  return nowTimeDate.setHours(23, 59, 59, 999);
}

// 获取本周起始时间
export function getCurrentWeek(time) {
  const current = time ? time : new Date();
  // current是本周的第几天
  let nowDayOfWeek = current.getDay();
  if (nowDayOfWeek === 0) nowDayOfWeek = 7;
  const dayNum = 1 * 24 * 60 * 60 * 1000;
  // 获取本周星期一的时间，星期一作为一周的第一天
  const firstDate = new Date(current.valueOf() - (nowDayOfWeek - 1) * dayNum);
  // 获取本周星期天的时间，星期天作为一周的最后一天
  const lastDate = new Date(new Date(firstDate).valueOf() + 6 * dayNum);
  return {
    startTime: new Date(startTime(firstDate)),
    endTime: new Date(endTime(lastDate)),
  };
}

//获取本月第一天
export function getCurrentMonthFirst(time) {
  const date = time ? time : new Date();
  date.setDate(1);
  return startTime(date);
}

//获取本月最后一天
export function getCurrentMonthLast(time) {
  const date = time ? time : new Date();
  const currentMonth = date.getMonth();
  const nextMonth = currentMonth + 1;
  const nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
  const oneDay = 24 * 60 * 60 * 1000;
  return endTime(new Date(nextMonthFirstDay - oneDay));
}

//获取当天开始时间和结束时间
export function getTodayStartTimeAndEndTime(time) {
  time = time ? time : new Date();
  return {
    startTime: new Date(time.setHours(0, 0, 0, 0)),
    endTime: new Date(time.setHours(23, 59, 59, 999)),
  };
}

// 获取本年第一天
export function getCurrentYearFirst(date) {
  let date2 = date ? date : new Date();
  date2.setDate(1);
  date2.setMonth(0);
  return startTime(date2);
}

//获取本年最后一天
export function getCurrentYearLast(date) {
  let date3 = date ? date : new Date();
  date3.setFullYear(date.getFullYear() + 1); // 设置到明年
  date3.setMonth(0); // 明年的0月，也就是对应到1月，是存在的哦，不是不存在的0
  date3.setDate(0); // 明年的0日
  return endTime(date3);
}

//获取本年最后一天
export function getCurrentYear(date) {
  let date3 = date ? date : new Date();
  return {
    startTime: getCurrentYearFirst(date3),
    endTime: getCurrentYearLast(date3),
  };
}

// 获取本月起始时间
export function getCurrentMonth(date) {
  const current = date ? date : new Date();
  return {
    startTime: getCurrentMonthFirst(current),
    endTime: getCurrentMonthLast(current),
  };
}

// 较为严格的方式校验身份证(http://web.jobbole.com/94182/)
export function isIdCard(val) {
  // 校验15位身份证
  if (val.toString().length === 15) {
    return /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/.test(
      val
    );
  }
  // 严格校验18位身份证
  if (_checkCode(val)) {
    var date = val.substring(6, 14);
    if (_checkDate(date)) {
      if (_checkProv(val.substring(0, 2))) {
        return true;
      }
    }
  }
  return false;
}

function _checkCode(val) {
  var p =
    /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
  var code = val.substring(17);
  if (p.test(val)) {
    var sum = 0;
    for (var i = 0; i < 17; i++) {
      sum += val[i] * factor[i];
    }
    if (parity[sum % 11].toString() === code.toUpperCase()) {
      return true;
    }
  }
  return false;
}

function _checkDate(val) {
  var pattern =
    /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
  if (pattern.test(val)) {
    var year = val.substring(0, 4);
    var month = val.substring(4, 6);
    var date = val.substring(6, 8);
    var date2 = new Date(year + "-" + month + "-" + date);
    if (date2 && date2.getMonth() === parseInt(month) - 1) {
      return true;
    }
  }
  return false;
}

function _checkProv(val) {
  var pattern = /^[1-9][0-9]/;
  var provs = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江 ",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北 ",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏 ",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
  };
  if (pattern.test(val)) {
    if (provs[val]) {
      return true;
    }
  }
  return false;
}
/**
 * @description: 格式化数字，数字转换 1千，1万，1千万 1亿
 * @param {*} value 传入数值
 * @return {*}
 */
export function formatNumber(value) {
  function roundFun(value, n) {
    return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
  }
  let newValue = ["", "", ""];
  let fr = 1000;
  const ad = 1;
  let num = 3;
  const fm = 1;
  while (value / fr >= 1) {
    fr *= 10;
    num += 1;
    // console.log('数字', value / fr, 'num:', num);
  }
  if (num <= 4) {
    // 千
    newValue[1] = "千";
    newValue[0] = roundFun(parseInt(value / 1000), 2) + "";
  } else if (num <= 8) {
    // 万
    const text1 = parseInt(num - 4) / 3 > 1 ? "千万" : "万";
    // tslint:disable-next-line:no-shadowed-variable
    const fm = "万" === text1 ? 10000 : 10000000;
    newValue[1] = text1;
    newValue[0] = roundFun(value / fm, 2) + "";
  } else if (num <= 16) {
    // 亿
    let text1 = (num - 8) / 3 > 1 ? "千亿" : "亿";
    text1 = (num - 8) / 4 > 1 ? "万亿" : text1;
    text1 = (num - 8) / 7 > 1 ? "千万亿" : text1;
    // tslint:disable-next-line:no-shadowed-variable
    let fm = 1;
    if ("亿" === text1) {
      fm = 100000000;
    } else if ("千亿" === text1) {
      fm = 100000000000;
    } else if ("万亿" === text1) {
      fm = 1000000000000;
    } else if ("千万亿" === text1) {
      fm = 1000000000000000;
    }
    newValue[1] = text1;
    newValue[0] = roundFun(parseInt(value / fm), 2) + "";
  }
  if (value < 10000) {
    newValue[1] = "";
    newValue[0] = value + "";
  }
  return newValue.join("");
}

/**
 * @description: 获取随机字符串  36位
 * @return {*}
 */
export function getUuid() {
  let s = [];
  let hexDigits = "0123456789abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";
  let uuid = s.join("");
  return uuid;
}

/**
 * @description: 是否包含维吾尔语
 * @param {*} str 参数
 * @return {*}
 */
export function containUyghur(str) {
  let isUYG = false;
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt();
    if (code >= 1536 && code <= 1791) {
      isUYG = true;
      return isUYG;
    }
    if (code >= 1536 && code <= 1791) {
      isUYG = true;
      return isUYG;
    }
    if (code >= 64336 && code <= 65023) {
      isUYG = true;
      return isUYG;
    }
    if (code >= 65136 && code <= 65279) {
      isUYG = true;
      return isUYG;
    }
  }
  return isUYG;
}
/**
 * @description: 直接用axio发起get请求获取json，直接读取会出问题
 * @param {*} jsonUrl json文件本地路径或者url
 * @return {*}
 */
export function getJSON(jsonUrl) {
  console.log("getJSON:", jsonUrl);
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: jsonUrl,
      dataType: "json",
      crossDomain: true,
      cache: false,
    })
      .then((resData) => {
        resolve(resData.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
// 获取随机颜色 十六进制格式
export function getHex2RandomColor() {
  return (
    "#" + ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6)
  );
}
// 获取随机颜色 rgba格式
export function getRGBARandomColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return "rgba(" + r + "," + g + "," + b + ",0.4)";
}
// 获取随机颜色 十六进制格式
export function getHexRandomColor() {
  return (
    "#" +
    (function (color) {
      return (color += "0123456789abcdef"[Math.floor(Math.random() * 16)]) &&
        color.length == 6
        ? color
        : arguments.callee(color);
    })("")
  );
}
/**
 * @description: 智能机浏览器版本信息
 * @return {*} 返回 Android 或 iOS
 */
export function getBrowserVersion() {
  var browser = {
    versions: (function () {
      var u = navigator.userAgent,
        app = navigator.appVersion;
      return {
        //移动终端浏览器版本信息
        trident: u.indexOf("Trident") > -1, //IE内核
        presto: u.indexOf("Presto") > -1, //opera内核
        webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
        iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf("iPad") > -1, //是否iPad
        webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
      };
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
  };

  if (
    browser.versions.ios ||
    browser.versions.iPhone ||
    browser.versions.iPad
  ) {
    return "iOS";
  } else if (browser.versions.android) {
    return "Android";
  }
}

/**
 *  @description: 获取文件后缀名
 * @param {String} filename 文件名
 */
export function getExt(filename) {
    if (typeof filename == 'string') {
        return filename
            .split('.')
            .pop()
            .toLowerCase()
    } else {
        throw new Error('filename must be a string type')
    }
}