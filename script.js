
$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

    });

    $('a[href*="#"]').on('click',function(e){

        e.preventDefault();
        
        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,
        }, 
          500,
          'linear'
        );
    });
});


    // <section class="skills" id="skills">
    //     <h1 class="heading"> <span>Skills</span></h1>
    //     <div class="row">
    //         <div class="skill">
    //             <h3>HTML</h3>
    //             <div class="progress-bar">
    //                 <div class="progress" style="width: 80%;"></div>
    //             </div>
    //         </div>
    //         <div class="skill">
    //             <h3>CSS</h3>
    //             <div class="progress-bar">
    //                 <div class="progress" style="width: 70%;"></div>
    //             </div>
    //         </div>
    //         <div class="skill">
    //             <h3>JavaScript</h3>
    //             <div class="progress-bar">
    //                 <div class="progress" style="width: 60%;"></div>
    //             </div>
    //         </div>
    //         <div class="skill">
    //             <h3>Python</h3>
    //             <div class="progress-bar">
    //                 <div class="progress" style="width: 75%;"></div>
    //             </div>
    //         </div>
    //     </div>
    // </section> 

    // .skills .row{
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     flex-wrap: wrap;
    // }
    // .skills .row .skill{
    //     flex: 1 1 30rem;
    //     padding: 4rem;
    //     padding-bottom: 0;
    // }
    // .skills .row .skill .skl h3{
    //     display: flex;
    //     align-items: center;
    //     font-size: 2rem;
    //     color: #eee;
    //     padding: 1rem 0;
    //     font-weight: normal;
    // }
    // .skills .row .skill .skl h3 i{
    //     padding-right: 1rem;
    //     color: var(--yellow);
    //     font-size: 50px;
    // }

    // <section class="skills" id="skills">
    // <h1 class="heading"> <span>skills </span></h1>
    //     <div class="row">
    //         <div class="skill">
    //             <div class="skl">
    //                 <h3> <i class="fab fa-python"></i>Python</h3>
    //                 <h3> <i class="fab fa-html5"></i> Html5</h3>
    //                 <h3> <i class="fa-brands fa-css3-alt"></i> CSS</h3>
    //                 <h3> <i class="fa-brands fa-js"></i> JavaScript</h3>
    //                 <h3> <i class="fa-solid fa-database"></i> Oracle</h3>
    //                 <h3> <i class="fab fa-angular"></i> Angular</h3>
    //                 <h3>  <i class="fab fa-python"></i>Django</h3>
    //             </div>
    //         </div>
    //     </div>
    // </section>


    // .heading {
    //     text-align: center;
    //     margin-bottom: 20px;
    // }
    
    // .skl {
    //     display: flex;
    //     flex-wrap: wrap; /* Allows wrapping to the next line if there's not enough space */
    //     gap: 15px; /* Space between each skill */
    //     justify-content: center; /* Centers the skills within the container */
    // }
    // .skills .row{
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     flex-wrap: wrap;
    //     padding: 20px;
    // }
    // .skills .row .skill{
    //     flex: 1 1 30rem;
    //     padding: 4rem;
    //     padding-bottom: 0;
    // }
    // .skills .row .skill .skl h3{
    //     display: flex;
    //     align-items: center;
    //     font-size: 2rem;
    //     color: #eee;
    //     padding: 1rem 0;
    //     font-weight: normal;
    //     margin: 0;
    //     justify-content: center;
    //     gap: 15px;
    //     flex-wrap: wrap; 
    // }
    // .skills .row .skill .skl h3 i{
    //     padding-right: 1rem;
    //     color: var(--yellow);
    //     font-size: 50px;
    //     margin-right: 8px;
    // }