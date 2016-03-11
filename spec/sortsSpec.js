var sorts = require("../sorts"),
    arr;

describe("#bubbleSort", function(){

  it("sorts an array of positive numbers", function(){
    expect(sorts.bubbleSort([3.1,4.5,1,2,5])).toEqual([1,2,3.1,4.5,5]);
  });

  it("sorts an array of negative numbers", function(){
    expect(sorts.bubbleSort([-4,-9,-2,-8,-2,0])).toEqual([-9,-8,-4,-2,-2,0]);
  });

  it("sorts an array of positive and negative numbers", function(){
    expect(sorts.bubbleSort([-3,4,1,-9,22])).toEqual([-9,-3,1,4,22]);
  });
  it("works with arrays that are already sorted", function(){
    expect(sorts.bubbleSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  });
});
