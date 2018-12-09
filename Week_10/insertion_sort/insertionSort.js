function insertionSort(testArr) {
    for (let i = 1; i < testArr.length; i++) {
        let temp = testArr[i]
        let j = i - 1

        while (j >= 0 && testArr[j] > temp) {
            testArr[j + 1] = testArr[j]
            j--
        }
        
        testArr[j + 1] = temp
    }
    return testArr
}