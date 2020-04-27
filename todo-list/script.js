$(()=>
{
let newInputTask=$('#newInputTask');
let btnAdd=$('#btnAdd');
let btnClear=$('#btnClear');
let btnReset=$('#btnReset');
let btnSort=$('#btnSort');
let ultask=$('#ultask');
//to make the buttons more dynamic
function togglebuttons()
{
    btnAdd.prop('disabled',newInputTask.val()=='');
    btnReset.prop('disabled',newInputTask.val()=='');
    btnClear.prop('disabled',ultask.children().length<1);
    btnSort.prop('disabled',ultask.children().length<1);
}
function additem()
{
    let listitem= $('<li>',{
        'class':'list-group-item',
        text:newInputTask.val()
    })
    listitem.click((event)=>
    {
         listitem.toggleClass('done')
        //$(event.target).toggleClass('disabled');//there is a problem in this actually we cant click on disabled class to undone the work
    })
    ultask.append(listitem);
    newInputTask.val('');
    togglebuttons();
}
function cleanup()
{
    $('#ultask .done').remove();
    togglebuttons();
}
function insertafter()
{
    $('#ultask .done').appendTo(ultask);
    togglebuttons();
}
newInputTask.on('input',()=>
{
    togglebuttons();
});
//add item on press of enter key
newInputTask.keypress((event)=>
{
    if(event.which==13)//for enter key
    {
     additem();
    }
})
btnAdd.click(()=>
{
  additem();
})
btnReset.click(()=>
{
    newInputTask.val('');
    togglebuttons();
})
btnClear.click(()=>
{
    cleanup();
});
btnSort.click(()=>
{
    insertafter();
});
})