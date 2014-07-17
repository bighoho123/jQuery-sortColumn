jQuery-sortColumn
=================

##[Demo](http://bighoho123.github.io/jQuery-sortColumn/)##


##Introduction##

A jQuery plugin to sort the specific column in a table

##Usage##

1. Include `jQuery_sortColumn.js` file after jQuery import

	```html
	<script src='path/to/src/jQuery_sortColumn.js'></script>
	```

2. Sort the specific column simply by calling

	```javascript
	jQuery("table").sortColumn{{
		index:i,
		/* ... */
	}}
	```
	
	Only **index** is compulsary. The other available options are:
	
	| Option    | Default  | other values |
	| --------- | -------- | --------|
	| order     | *'asc'*  | 'desc' |
	| format    | 'string'* | 'number' or 'currency' or 'dd/mm/yyyy' or 'dd-mm-yyyy'|

3. Party o(︶︿︶)o 
