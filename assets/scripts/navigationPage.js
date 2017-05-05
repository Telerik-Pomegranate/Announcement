  let prevNextPage = (function() {
      function navigation() {
          $('.pagination').on('click', 'li.prev', function() {
              let endMove = $('li.active').attr('class')
              if (endMove !== 'prev active') {
                  let activeLi = $('li.active').removeClass('active').prev().addClass('active');
                  let redirecString = activeLi.find('a').attr('href');
                  if (redirecString) {
                      window.location.replace(redirecString)
                  }
              }
          });
          $('.pagination').on('click', 'li.next', function() {
       let endMove = $('li.active').attr('class')
              if (endMove !== 'next active') {
                  let activeLi = $('li.active').removeClass('active').next().addClass('active');
                  let redirecString = activeLi.find('a').attr('href');
                  if (redirecString) {
                      window.location.replace(redirecString)
                  }
              }
          });
      }
      return { navigation };
  }());
  export default prevNextPage;