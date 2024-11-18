/**
 * Move Zeros
 *
 * 문제: 배열에서 0을 배열의 끝으로 이동시키고, 나머지 요소들의 순서는 유지
 *
 * 접근 방법:
 * 1. Filter로 0이 아닌 값들만 추출
 * 2. 원본 배열 길이와의 차이로 0의 개수 계산
 * 3. 계산된 0의 개수만큼 새 배열 생성하여 합치기
 *
 * 시간복잡도: O(n)
 * 공간복잡도: O(n)
 */

function moveZeros(arr) {
  let nonZero = arr.filter((item) => item !== 0); // 0이 아닌 값만 필터링
  let zeroCount = arr.length - nonZero.length; // 0의 개수 구하기
  let zeros = new Array(zeroCount).fill(0); // 0의 개수만큼 0 배열 생성
  return nonZero.concat(zeros); // 0이 아닌 배열과 0 배열 합치기
}

const result = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(result); // [false, 1, 1, 2, 1, 3, "a", 0, 0]
