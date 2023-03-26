var list = document.querySelectorAll('ul li')
var food =  document.querySelectorAll('.food-img')

list.forEach((item,index)=>{
    item.addEventListener('click',function(e){
        var type = e.target.getAttribute('type-food')
        var a = document.querySelector('.hover')
        a.classList.remove('hover')
        item.classList.add('hover')
        food.forEach((item)=>{
            if (type == 'all' || item.getAttribute('type-food') == type)
                    item.classList.remove('hide')
                else item.classList.add('hide')
        })
    })
})

