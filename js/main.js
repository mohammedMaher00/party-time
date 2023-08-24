$('html,body').animate({scrollTop:0})

let headLines=$('.headLine')

for(i=0;i<headLines.length;i++){
    
    
    $(headLines[i]).click(function(e){
    
    
        $(e.target).next().slideToggle(500)
        $(e.target).next().siblings('.move-text').slideUp(500)
        
        
    })


}

// *********


let slidebarOuterWidth=$('.sidebar-inner').outerWidth(true)

$('#sideBar').css('left',-slidebarOuterWidth)
$('.toggle-icon ').click(function(){
    


    if($('#sideBar').css('left')=='0px'){
        $('#sideBar').animate({left:-slidebarOuterWidth},300)

    }else{
        $('#sideBar').animate({left:'0px'},300)
    }
  
})

$('.close-ico ').click(function(){
    $('#sideBar').animate({left:-slidebarOuterWidth},300)
})


// ******
let countDownDate=new Date('Oct 25,2023 23:59:59').getTime()

let counter= setInterval(function(){

    // get date now
    let dateNow=new Date( ).getTime()
    // differance between now and countdown date
    let dateDiff=countDownDate-dateNow
    // get time units
    // days
    let days=Math.floor(dateDiff/(1000*60*60*24))
    $('.counterDays').html(`${days} Day`)
// hours
let hours=Math.floor(dateDiff%(1000*60*60*24)/(1000*60*60))
$('.counterHours').html(`${hours} Hour`)
// min
let min=Math.floor(dateDiff%(1000*60*60)/(1000*60))
$('.counterMin').html(`${min} Min`)
// sec
let sec=Math.floor(dateDiff%(1000*60)/(1000))
$('.counterSec').html(`${sec} Sec`)

    if(dateDiff<0){
        clearInterval(counter)
    }
    

},1000)

$('#sideBar ul li a[href^="#"').click(function(e){
    let aHref=e.target.getAttribute('href')
  
     screenOffset= $(aHref).offset().top
   
    $('html, body').animate({scrollTop:screenOffset},1000)
}) 

let area =document.querySelector('#tArea')

area.addEventListener('input' , function(){
    let textareaLenght= $('#tArea').val().length

    $('.charNum').html(100-textareaLenght)

    if(textareaLenght>100){

    //    $('.charNum').html(100-textareaLenght)
$('#tArea').next().removeClass('d-none');
$('.viewNum').addClass('d-none')

    }else{
        $('#tArea').next().addClass('d-none')
        $('.viewNum').removeClass('d-none')
    }

})