window.onload = function () {

    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var pic = document.getElementById('pic');

    setTimeout(function () {
        a.style.animation = 'slide_right 8s';
        a.style.animationFillMode='forwards';

        b.style.animation = 'slide_left 8s';
        b.style.animationFillMode='forwards';

        setTimeout(function () {
            a.innerHTML="It's me Jema ^_^";
            a.style.opacity=1;
            a.style.animation = 'slide_left 8s';
            a.style.animationFillMode='forwards';

            pic.style.opacity=1;
            pic.style.animation = 'slide_right 8s';
            pic.style.animationFillMode='forwards';

            setTimeout(function () {
                a.innerHTML="Joined SoloLearn on:<br>15-03-2017🤝";
                a.style.opacity=1;
                a.style.animation = 'slide_right 8s';
                a.style.animationFillMode='forwards';

                pic.src='https://i.imgur.com/ZccrVAZ.png';
                pic.style.opacity=1;
                pic.style.animation = 'slide_left 8s';
                pic.style.animationFillMode='forwards';

                setTimeout(function () {
                    a.innerHTML="Reached platinum lvl 16 on 21-07-2017 as 77th platinum";
                    a.style.opacity=1;
                    a.style.animation = 'slide_left 8s';
                    a.style.animationFillMode='forwards';

                    b.innerHTML="🏅7️⃣7️⃣🏅";
                    b.style.opacity=1;
                    b.style.animation = 'slide_right 8s';
                    b.style.animationFillMode='forwards';

                    setTimeout(function () {
                        a.innerHTML="Reached lvl 17 on 12-may-2018";
                        a.style.opacity=1;
                        a.style.animation = 'slide_right 8s';
                        a.style.animationFillMode='forwards';

                        b.innerHTML="as 18th SoloLearner to reach it.🎖️1️⃣8️⃣🎖️";
                        b.style.opacity=1;
                        b.style.animation = 'slide_left 8s';
                        b.style.animationFillMode='forwards';

                        setTimeout(function () {
                            a.innerHTML="Reached lvl 18 on 31-mar-2019";
                            a.style.opacity=1;
                            a.style.animation = 'slide_left 8s';
                            a.style.animationFillMode='forwards';

                            b.innerHTML="as the 1st one ever ^_^<br>🎉1️⃣st🎊";
                            b.style.opacity=1;
                            b.style.animation = 'slide_right 8s';
                            b.style.animationFillMode='forwards';

                            setTimeout(function () {

                                a.innerHTML="Over 32,000 wins & 65,000 draws";
                                a.style.opacity=1;
                                a.style.animation = 'slide_right 8s';
                                a.style.animationFillMode='forwards';

                                b.innerHTML="📊📈📉";
                                b.style.opacity=1;
                                b.style.animation = 'slide_left 8s';
                                b.style.animationFillMode='forwards';

                                setTimeout(function () {

                                    a.innerHTML="Thank u from watching.";
                                    a.style.opacity=1;
                                    a.style.animation = 'slide_left 8s';
                                    a.style.animationFillMode='forwards';

                                    b.innerHTML="Celebrating #1 now.<br>🎉🎊🏆🎖️";
                                    b.style.opacity=1;
                                    b.style.animation = 'slide_right 8s';
                                    b.style.animationFillMode='forwards';

                                },8000)

                            },8000);

                        },8000);

                    },8000);

                },8000);

            },8000);

        },8000);
    },200);
};
