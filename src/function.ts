// only params type defines
function makeChai (type :string , cup: number) {
    console.log(`Making ${cup} cups of ${type}`)
}
makeChai("Malai Chai",2)

// only return value type defines
function getChaiPrice ():number {
    return 35
}

// void

// TypeScript-এ void মানে হলো কোনো function নির্দিষ্ট কোনো value return করে না।
function logChai(): void {
    console.log('chai is readey')
}