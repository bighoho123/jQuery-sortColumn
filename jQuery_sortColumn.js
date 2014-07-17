/**
 * This jQuery plugin helps to sort a particular column in a table
 * @author Jinzhe Li (jinjinwudi@gmail.com)
 */
jQuery.fn.sortColumn = function (options) {
	var $table = this;

	// Get the default options
    var opts = jQuery.extend({}, jQuery.fn.sortColumn.defaults, options);
    var order = opts.order;
    var index = opts.index;
    var format = opts.format;

    // Define the comparator function
    function sortFunction(index,format) {
        return function (a, b) {
            var dataA=jQuery(a).children("td:nth-child("+index+")").html();
            var dataB=jQuery(b).children("td:nth-child("+index+")").html();
            // Format : dd-mm-yyyy
            if (format=='dd-mm-yyyy'){
	            if (dataA==""){
	                dataA='01-01-1970';
	            }
	            if (dataB==""){
	                dataB='01-01-1970';
	            }
	            
	            dataA=dataA.split('-');
	            dataB=dataB.split('-');
	            
	            dataA=new Date(dataA[2],dataA[1]-1,dataA[0]).getTime();
	            dataB=new Date(dataB[2],dataB[1]-1,dataB[0]).getTime();

	            if (dataA>dataB) 
	                return 1;
	            else if (dataA==dataB)
	                return 0;
	            else 
	                return -1;
	        }
	        // Format : dd/mm/yyyy
	        if (format=='dd/mm/yyyy'){
	            if (dataA==""){
	                dataA='01/01/1970';
	            }
	            if (dataB==""){
	                dataB='01/01/1970';
	            }
	            
	            dataA=dataA.split('/');
	            dataB=dataB.split('/');
	            
	            dataA=new Date(dataA[2],dataA[1]-1,dataA[0]).getTime();
	            dataB=new Date(dataB[2],dataB[1]-1,dataB[0]).getTime();

	            if (dataA>dataB) 
	                return 1;
	            else if (dataA==dataB)
	                return 0;
	            else 
	                return -1;
	        }
	        // Format : number
	        if (format=='number'){
	        	return dataA-dataB;
	        }
	        // Format : currency
	        if (format=='currency'){
	        	dataA=dataA.replace(/\$/g,'');
	        	dataA=dataA.replace(/\,/g,'');
	        	dataB=dataB.replace(/\$/g,'');
	        	dataB=dataB.replace(/\,/g,'');
	        	return dataA-dataB;
	        }

	        if (format=='string') {
	        	if (dataA>dataB) {
	        		return 1;
	        	} else if (dataA==dataB) {
	        		return 0;
	        	} else {
	        		return -1;
	        	}
	        }
            
        };
    }

    var original=[];
    var sorte=[];
    $table.children("tbody").children("tr").each(function(index,ele){
        original.push(ele);
    });
    
    sorted = original.sort(sortFunction(index,format));
    if (order=='desc')
        sorted=sorted.reverse();
    $table.children("tbody").html(sorted);
    
    
};
// Default parameter
jQuery.fn.sortColumn.defaults = {
    index: 1, /* index is 1 based instead of 0 based because of css nth:child(index) */
    order: 'asc',
    format: 'string'
};

