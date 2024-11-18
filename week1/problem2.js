/**
 * Maximum Subarray Sum
 *
 * 문제: 배열 안에서 연속된 값들의 합 중 가장 큰 값을 구하기
 *
 * 접근 방법:
 * 1. 각 위치까지의 최대 부분합을 저장하는 prefix 배열 사용
 * 2. 각 위치에서 이전까지의 합 + 현재 값과 현재 값만 사용하는 경우 중 큰 값 선택
 * 3. prefix 배열에서 최대값 반환
 *
 * 시간복잡도: O(n)
 * 공간복잡도: O(n)
 */

function maxSubarraySum(arr) {
  const prefix = new Array(arr.length); // prefix 배열은 각 위치까지의 최대 부분 합을 저장
  prefix[0] = arr[0]; // 값이 하나인 경우

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = Math.max(prefix[i - 1] + arr[i], arr[i]); // i 까지의 최대값 기록
  }

  return Math.max(...prefix);
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(arr)); // 6 ([4, -1, 2, 1])
