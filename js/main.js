/**
 * Copyright (c) 2013 Aleksey Garlex
 *   http://www.garlex.ru
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

var data = [
    {
        "date": "06.05.2014",
        "good": "Платье",
        price:"7000",
        ncard:'',
        cvv:'',
        fio:'',
        year:''

    },
    {
        "date": "16.05.2014",
        "good": "Платье",
        price:"9000",
        ncard:'',
        cvv:'',
        fio:'',
        year:''
    },
    {
        "date": "26.05.2014",
        "good": "Платье",
        price:"7500",
        ncard:'',
        cvv:'',
        fio:'',
        year:''
    },
    {
        "date": "12.06.2014",
        "good": "Платье",
        price:"3000",
        ncard:'',
        cvv:'',
        fio:'',
        year:''
    }
];
$(document).ready(function(){
    $.fn.editTable = function(data){
       return this.each(function(){
           function edit(){
               var $row = $(this).parents('.items'),
                   $item = $row.find('.item'),
                   $detail = $row.find('.detail');
               if($(this).is('.glyphicon-eye-close')){
                   $item.removeClass('hide');
                   $detail.removeClass('show');

               }else{
                   $item.addClass('hide');
                   $detail.addClass('show');

               }

           }
           function change (){
               var $row = $(this).parents('.items');
               data[$row.index()][$(this).attr('name')] = $(this).val();
               $table.html($temp.render(data));


           }

           function add() {
               var d = new Date(),
                   dd = (d.getDate()<10)?('0'+d.getDate()):d.getDate(),
                   m = ((d.getMonth()+1)<10)?('0'+(d.getMonth()+1)):(d.getMonth()+1);
               $.observable(data).insert({
                   "date": dd+'.'+ m+'.'+ d.getFullYear(),
                   "good": "",
                   price:"",
                   ncard:'',
                   cvv:'',
                   fio:'',
                   year:''
               });

               $table.html($temp.render(data));
               $table.find(':last-child  .glyphicon-eye-open').click();
           }

           var _ts = $(this),
               $table = _ts.find('.b-table'),
               $add = _ts.find('.add'),
               $temp = $($table.attr('data-template'));

           $table.html($temp.render(data));

           $table.on('click','.glyphicon-eye-open', edit);
           $table.on('click','.glyphicon-eye-close', edit);
           $table.on("blur", "input", change);
           $add.on("click", add);
       })
    }
    $('.edit-table').editTable(data);

});