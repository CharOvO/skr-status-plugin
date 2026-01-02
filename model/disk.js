import si from 'systeminformation';
import { blockDevices } from 'systeminformation';
import { diskLayout } from 'systeminformation';

/**
 * 获取硬盘信息
 * @return {Promise<Object>} // 包含每块磁盘名称,容量,温度等信息的对象
 */

export async function getDiskInfo() {
    // return [await si.blockDevices(),await si.fsSize()];
    try {
        let disk = {};
        const info = [
            si.diskLayout(),
            si.blockDevices(),
            si.fsSize()
        ]
        return disk;
    } catch (error) {
        
    }
}

console.log(await getDiskInfo());