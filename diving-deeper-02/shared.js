var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan .button');

selectPlanButtons.forEach(x => {
     x.addEventListener('click',function(){
        backdrop.style.display = "block";
        modal.style.display = 'block';
     });
});