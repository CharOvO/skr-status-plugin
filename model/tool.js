
// 单位转换函数
export function formatSizeUnit(size) {
    if (size > (1024 ** 4)) {
        return `${(size / (1024 ** 4)).toFixed(1)}TB`;
    } else if (size > (1024 ** 3)) {
        return `${(size / (1024 ** 3)).toFixed(1)}GB`;
    } else if (size > (1024 ** 2)) {
        return `${(size / (1024 ** 2)).toFixed(1)}MB`;
    } else if (size > (1024 ** 1)) {
        return `${(size / (1024 ** 1)).toFixed(1)}KB`;
    } else {
        return `${(size).toFixed(1)}B`;
    }
 }
