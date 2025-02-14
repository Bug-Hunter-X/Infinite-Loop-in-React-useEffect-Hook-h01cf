# React useEffect Infinite Loop Bug
This repository demonstrates a common bug in React applications involving the `useEffect` hook. The bug causes an infinite loop due to incorrect usage of the dependency array.

## Bug Description
The `useEffect` hook is used to perform side effects after rendering. However, if the dependency array is omitted or incorrectly specified, the effect will run repeatedly, leading to an infinite loop.

## Bug Solution
The solution involves correctly specifying the dependency array for the `useEffect` hook. In this case, the empty array `[]` indicates that the effect should only run once after the initial render.