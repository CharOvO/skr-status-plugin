import si from 'systeminformation';

/**
 * 获取内存信息
 * @return {Promise<Object>} // 包含 内存占用百分比 使用量 总量 的对象
 */

export async function getMemoryInfo() {
    try {
        let memory = {};
        const info = await si.get({
            mem: 'total,used'
        });

        memory.total = `${(info.mem.total / 1024 ** 3).toFixed(1)}GB`,
        memory.used = `${(info.mem.used / 1024 ** 3).toFixed(1)}GB`
        
        return memory;
    } catch (error) {
        logger.error("获取内存信息失败!");

        return {
            total: '0GB',
            used: '0GB'
        }
    }
}