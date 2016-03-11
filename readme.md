#JS implementations of [sorting algorithms](https://en.wikipedia.org/wiki/Sorting_algorithm)

##bubble sort
- O(n^2)
- highest will bubble to the top(right), one for each outer iteration

1. compare pairs (from left to right) in the unsorted sub-array
2. if left > right, swap
3. repeat 1, 2 until zero or one unsorted (leftmost) element remains


##insertion sort
- O(n^2)

1. find the position that holds the minimum value in the unsorted sub-array
2. swap the found minimum into its correct location (leftmost position of unsorted sub-array)

##selection sort
- O(n^2)

##quick sort
- O(n*log(n))

##merge sort
- O(n*log(n))
