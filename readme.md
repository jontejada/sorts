#JS implementations of [sorting algorithms](https://en.wikipedia.org/wiki/Sorting_algorithm)

##bubble sort
- O(n^2)
- highest will bubble to the top(right), one for each outer iteration

1. compare pairs (from left to right) in the unsorted sub-array
2. if left > right, swap
3. repeat 1, 2 until zero or one unsorted (leftmost) element remains

**OR**

- compare adjacent, swap if out of order
- repeat until no swaps are needed
- this bubbles the highest to the end
- very slow, may be ok if elemens are mostly in order
- best case of fully sorted is O(n)

##insertion sort
- O(n^2)

1. find the position that holds the minimum value in the unsorted sub-array
2. swap the found minimum into its correct location (leftmost position of unsorted sub-array)

OR

- grab one element from the unsorted sub-array
- shift the element into the sorted sub-array (shift back until in correct position)

##selection sort
- O(n^2)
- build sorted sub-array from left to right by finding minimum valued element in the unsorted sub-array
- swap the min into place (filling left to right)


##quick sort
- O(n*log(n))
- pick a pivot
- partition around the pivot (pivot element ends up in it's final position)
- recursively repeat steps on left and right sub-arrays until they are all of size one or zero
- concat back into one list


##merge sort
- O(n*log(n))
- divide the array into one-element sub-arrays
- merge pairs by repeatedly grabbing least of the left values and inserting into new sub-array
- repeat until a single (sorted) array is left 
