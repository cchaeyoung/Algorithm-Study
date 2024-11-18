# Week 1 - 알고리즘 문제 풀이

## 1. Move Zeros

### 문제 설명

배열에서 0을 배열의 끝으로 이동시키고, 나머지 요소들의 순서는 유지하는 문제

### 풀이 방법

- Filter와 Concat을 사용한 접근
- 0이 아닌 요소들만 먼저 필터링하여 새로운 배열 생성
- 원래 배열 길이에서 필터링된 배열 길이를 빼서 0의 개수 계산
- 계산된 0의 개수만큼 0 배열을 생성하여 합침

### 코드 (problem1.js)

```javascript
/**
 * Move Zeros
 *
 * 시간복잡도: O(n) - 배열을 한 번 순회
 * 공간복잡도: O(n) - 새로운 배열 생성
 */
function moveZeros(arr) {
  let nonZero = arr.filter((item) => item !== 0); // 0이 아닌 값만 필터링
  let zeroCount = arr.length - nonZero.length; // 0의 개수 구하기
  let zeros = new Array(zeroCount).fill(0); // 0의 개수만큼 0 배열 생성
  return nonZero.concat(zeros); // 0이 아닌 배열과 0 배열 합치기
}

const result = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(result); // [false, 1, 1, 2, 1, 3, "a", 0, 0]
```

## 2. Maximum Subarray Sum

### 문제 설명

배열 안에서 연속된 값들의 합 중 가장 큰 값을 구하는 문제

### 풀이 방법

- Kadane's Algorithm 사용
- 각 위치까지의 최대 부분합을 저장하는 prefix 배열 활용
- 각 단계에서 이전까지의 합 + 현재 값과 현재 값만 사용하는 경우 중 큰 값 선택
- 최종적으로 prefix 배열에서 최대값 반환

### 코드 (problem2.js)

```javascript
/**
 * Maximum Subarray Sum (Kadane's Algorithm)
 *
 * 시간복잡도: O(n) - 배열을 한 번 순회
 * 공간복잡도: O(n) - prefix 배열 사용
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
```

## 3. Unique String

### 문제 설명

주어진 문자열 배열에서 사용된 문자 구성이 다른 하나의 문자열을 찾는 문제

### 풀이 방법

- 각 문자열을 전처리(소문자 변환, 공백 제거, 중복 문자 제거, 정렬)
- 전처리된 문자열 배열에서 유일한 문자열 찾기
- indexOf와 lastIndexOf를 비교하여 한 번만 나타나는 문자열의 인덱스 찾기
- 원본 배열에서 해당 인덱스의 문자열 반환

### 코드 (problem3.js)

```javascript
/**
 * Find Unique String
 *
 * 시간복잡도: O(n * m * log m) - n은 배열 길이, m은 가장 긴 문자열의 길이
 * 공간복잡도: O(n * m) - 전처리된 문자열 배열 저장
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
```

## 요약

- Week 1에서는 배열과 문자열 처리, 최대 부분합 문제를 다룸
- JavaScript의 filter, map, Set 등 내장 메서드를 활용하여 가독성 있게 구현
