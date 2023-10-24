const text = document.querySelector('.header__info-text')
      btnTx = document.querySelector('.header__btns')
      inp = document.querySelector('.book__input1')
      inp2 = document.querySelector('.input3')
      guestions = document.querySelector('.book__input2')
      btnBook = document.querySelector('.book__btn')

btnBook.addEventListener('click', function () {
        console.log(`${inp.value},${inp2.value},${guestions.value}`);
        
})

btnTx.addEventListener('click',function(){
    if(text.classList.contains('active')){
        text.classList.remove('active')
    }else{
        text.classList.add('active')
    }
})