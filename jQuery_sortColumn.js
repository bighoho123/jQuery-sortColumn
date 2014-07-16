/**
 * This jQuery plugin helps to sort a particular column in a table
 * @author Jinzhe Li (jinjinwudi@gmail.com)
 */
jQuery.fn.sortColumn = function (options) {

    var opts = jQuery.extend({}, jQuery.fn.sortColumn.defaults, options);
    function sortFunction(index) {
        return function (a, b) {
            var dataA=jQuery(a).children("td:nth-child("+index+")").html();
            var dataB=jQuery(b).children("td:nth-child("+index+")").html();
            
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
        };
    }

    var $table = this;
    var order = opts.order;
    var index = opts.index;
    
    var original=[];
    var sorte=[];
    $table.children("tbody").children("tr").each(function(index,ele){
        original.push(ele);
    });
    
    sorted = original.sort(sortFunction(index));
    if (order=='desc')
        sorted=sorted.reverse();
    $table.children("tbody").html(sorted);
    
    
};
// Default parameter
jQuery.fn.sortColumn.defaults = {
    index: 1,
    order: 'asc'
};

