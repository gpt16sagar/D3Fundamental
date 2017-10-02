// $(function(){

//     (function(){
//         var Name = "D3 Rectangle";
//          d3.select("#div_rect").append("svg").append("rect").attr("width",50).attr('height',200).style("fill","blue");


//     }());

   
// });



$(function(){

    var RectModule ={};

    (function(ns){
        ns.Name = "D3 Rectangle";
         d3.select("#div_rect").append("svg").append("rect").attr("width",50).attr('height',200).style("fill","blue");


    })(RectModule);


    $('#RectModule_Title').text(RectModule.Name).attr('style','color:red;');

   
});


var app={};
(function(ns,$){
    ns.Name="none";
    console.log($===jQuery);
})(app,jQuery);

var app1={};
(function(ns,$,undefined){
    ns.Name="none";
    console.log(undefined);
})(app1,jQuery);


+function(){
    var Name="none";
    console.log("Executed!!");
}();




var app2={};
(function(ns,$,undefined){
    
var orgchart={
    name:'michael',subordinate:[
        {
            name:'andy',subordinate:[
                {
                    name:'Ram',subordinate:[]
                },
                {
                    name:'shyam',subordinate:[]
                }
            ]
        }
    ]
};

// var fn = function  (topEmployee){
var fn = function showall (topEmployee){
    console.log(topEmployee.name);
    for(var i = 0; i<topEmployee.subordinate.length;i++)
       
            // fn(topEmployee.subordinate[i]);
               showall(topEmployee.subordinate[i]);
       

};

var fn2 = fn;
fn=null; //occure error, inorder to solve we need to named anonymous function // var fn = function(topEmployee){...}
    fn2(orgchart);


})(app2,jQuery);
