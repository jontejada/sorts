var g = { value: 0, next: null };
var f = { value: 4, next: g };
var e = { value: 1, next: f };
var d = { value: 2, next: e };
var c = { value: 3, next: d };
var b = { value: 6, next: c };
var a = { value: 5, next: b };

function sort(node) {
	var head = node; 
	var track = node;
	while (track) {
		node = head;
		while (node.next) {
			if (node.value > node.next.value) {
				var temp = node.value;
				node.value = node.next.value;
				node.next.value = temp;
			}
			node = node.next;
		}
		track = track.next;
	}
	return head;
}

console.log(sort(a));