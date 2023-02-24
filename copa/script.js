function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form = document.getElementById('year')
    var res = document.getElementById('res')
    var formAno = Number(form.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (formAno == 1930 || formAno == 1950) {
        img.setAttribute('src', 'img/uruguai.png')
        res.innerHTML = `O vencedor da edição de  ${formAno} foi o Uruguai`     
        document.body.style.background = '#3299CC'
        document.getElementsByTagName('h1')[0].style.color = '#000000'
        document.getElementsByTagName('p')[2].style.color = '#000000'
    } else if (formAno == 1934 || formAno == 1938 || formAno == 1982 || formAno == 2006) {
            res.innerHTML = `O vencedor da edição de  ${formAno} foi a Itália`
            img.setAttribute('src', 'img/italia.png')
            document.body.style.background = '#0000ff'
            document.getElementsByTagName('h1')[0].style.color = '#ffffff'
            document.getElementsByTagName('p')[2].style.color = '#ffffff'
    } else if (formAno == 1954 || formAno == 1978 || formAno == 1990 || formAno == 2014) {
            res.innerHTML = `O vencedor da edição de  ${formAno} foi a Alemanha`
            img.setAttribute('src', 'img/alemanha.png')
            document.body.style.background = '#000000'
            document.getElementsByTagName('h1')[0].style.color = '#FFDF00'
            document.getElementsByTagName('p')[2].style.color = '#E10606'  
    } else if (formAno == 1958 || formAno == 1962 || formAno == 1970 || formAno == 1994 || formAno == 2002) {
        res.innerHTML = `O vencedor da edição de  ${formAno} foi o Brasil`
        img.setAttribute('src', 'img/brasil.png')
        document.body.style.background = '#FFDF00'
        document.getElementsByTagName('h1')[0].style.color = '#20B200'
        document.getElementsByTagName('p')[2].style.color = '#20B200'  
    } else if (formAno == 1966) {
        res.innerHTML = `O vencedor da edição de  ${formAno} foi a Inglaterra`
        img.setAttribute('src', 'img/inglaterra.png')
        document.body.style.background = '#E10606'
        document.getElementsByTagName('h1')[0].style.color = '#ffffff'
        document.getElementsByTagName('p')[2].style.color = '#ffffff'  
    } else if (formAno == 1978 || formAno == 1986 || formAno == 2022) {
        res.innerHTML = `O vencedor da edição de  ${formAno} foi a Argentina`
        img.setAttribute('src', 'img/argentina.png')
        document.body.style.background = '#3299CC'
        document.getElementsByTagName('h1')[0].style.color = '#ffffff'
        document.getElementsByTagName('p')[2].style.color = '#ffffff'  
    } else if (formAno == 1998 || formAno == 2018) {
        res.innerHTML = `O vencedor da edição de  ${formAno} foi a França`
        img.setAttribute('src', 'img/franca.png')
        document.body.style.background = '#0000AF'
        document.getElementsByTagName('h1')[0].style.color = '#E10606'
        document.getElementsByTagName('p')[2].style.color = '#E10606'  
    } else if (formAno == 2010) {
        res.innerHTML = `O vencedor da edição de  ${formAno} foi a Espanha`
        img.setAttribute('src', 'img/espanha.png')
        document.body.style.background = '#E10606'
        document.getElementsByTagName('h1')[0].style.color = '#FFDF00'
        document.getElementsByTagName('p')[2].style.color = '#FFDF00'  
    } else {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    res.appendChild(img) 
}