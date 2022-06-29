





function christmasCountdown(){
    const christmasDate= new Date('December 25,2022 00:00');
    const now=new Date();
    const diff=christmasDate-now;
    // console.log(diff);

    const msInSecond = 1000;//сколько миллисекунд в секунде - 1,000
    const msInminute = 60*1000;// сколько миллисекунд в минуте - 60,000 
    const msInHour = 60*60*1000; // сколько миллисекунд в часе - 3 600 000
    const msInDay = 24*60*60*1000;// сколько миллисекунд в сутках - 86 400 000

    const displayDay = Math.floor (diff/msInDay);
    document.querySelector('.days').textContent=displayDay;

    
    const displayHour = Math.floor( (diff%msInDay)/msInHour);
    document.querySelector('.hours').textContent=displayHour;

    const displayminutes=Math.floor((diff%msInHour)/msInminute);
    document.querySelector('.minutes').textContent=displayminutes;

    const displaysecond=Math.floor((diff%msInminute)/msInSecond);
    document.querySelector('.seconds').textContent=displaysecond;

   if(diff<=0){
    document.querySelector('.days').textContent=0;
    document.querySelector('.hours').textContent=0;
    document.querySelector('.minutes').textContent=0;
    document.querySelector('.seconds').textContent=0;
    clearInterval(timerID);
    merryChristmas(); 
    //  вызываем изменение надписи когда счет до йдет до нуля
   }



}
 let timerID=setInterval(christmasCountdown,1000);

function merryChristmas(){
    const heading=document.querySelector('h1');
    heading.textContent='MERRY CHRISTMAS!!! HO-HO-HO!';
    heading.classList.add('red')
}

const button=document.querySelector('#button');
const audio=document.querySelector('#myAudio');
button.addEventListener('click',playMusic);
function playMusic(){
    if(audio.paused){
        audio.play();
    }
    else{audio.pause();
    }
}

particlesJS("particles-js", {
    particles: {
      number: {
        value: 52,
        density: {
          enable: true,
          value_area: 631.3280775270874
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#F9F9F9"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 400,
          size: 4,
          duration: 0.3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  
  