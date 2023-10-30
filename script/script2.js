var el = document.getElementById('row');
var collumn1 = document.getElementById('col1')
var collumn2 = document.getElementById('col2')

var sortable = new Sortable(el, {
    group: 'shared',
	swap: true,
	swapClass: "highlight",
	animation: 150,
});

var sortableCol1 = new Sortable(collumn1, {
    group: 'shared',
	animation: 150,
});

var sortableCol2 = new Sortable(collumn2, {
    group: 'shared',
	animation: 150,
});