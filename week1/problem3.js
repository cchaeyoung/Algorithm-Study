/**
 * Find Unique String
 *
 * 문제: 주어진 문자열 배열에서 사용된 문자 구성이 다른 하나의 문자열 찾기
 *
 * 접근 방법:
 * 1. 각 문자열을 정규화
 *    - 소문자 변환
 *    - 공백 제거
 *    - Set으로 중복 문자 제거
 *    - 정렬하여 표준화
 * 2. 정규화된 문자열 중 유일한 것의 인덱스 찾기
 * 3. 원본 배열에서 해당 인덱스의 문자열 반환
 *
 * 시간복잡도: O(n * m * log m) - n: 배열 길이, m: 가장 긴 문자열 길이
 * 공간복잡도: O(n * m)
 */

function findUniq(arr) {
  const normal = arr.map((str) => {
    const chars = new Set(str.toLowerCase().replace(/\s+/g, "")); // 소문자로 변환, 공백 제거, 중복 문자 제거
    return [...chars].sort().join(""); // 정렬하여 문자열로 변환
  });

  const uniqueIndex = normal.findIndex(
    (str, i) => normal.indexOf(str) === normal.lastIndexOf(str) // 유일한 문자열 찾기
  );

  return arr[uniqueIndex];
}

console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"])); // 'BbBb'
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])); // 'foo'
