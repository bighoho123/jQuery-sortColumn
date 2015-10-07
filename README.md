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
2. Declare the table with standard structure

	```html
	<table>
		<thead>
			<!-- header -->
		</thead>
		<tbody>
			<!-- content -->
		</tbody>
	</table>
	```

3. Sort the specific column simply by calling

	```javascript
	jQuery("table").sortColumn{{
		index:i,
		/* ... */
	}}
	```
	
	Only **index** is compulsory. The other available options are:
	
	| Option    | Default  | other values |
	| --------- | -------- | --------|
	| order     | *'asc'*  | 'desc' |
	| format    | 'string'* | 'number' or 'currency' or 'dd/mm/yyyy' or 'dd-mm-yyyy'|

4. Party o(∩_∩)o 

##FAQ##

- Why my jQuery click event is not working after sorting?

	You probably used the `jQuery(element).click()` to bind the event. Since sorting changed the DOM structure. This **direct binding** does not work on the new element. Solutions are either to use html `onclick` inline attribute or use **delegated binding** instead (`jQuery(table).on('click','element',function(){})`). More info can be find [here](http://api.jquery.com/on/#direct-and-delegated-events)
