// chú ý khi dùng ES modeule thì chuyển tên file thành mjs hoặc đổi trong packet.json

import logName from "./helper.mjs";
import { sum } from "./helper.mjs";
logName("hi hi");
var result = sum(1, 2);
console.log(result);
