let input = document.querySelector('.gb');
let ball = document.querySelector('.ball');
let jumpbtn = document.querySelector('.jump');
let para = document.querySelectorAll('p');
let t1=document.querySelector('.s1');
let t2=document.querySelector('.s2');
let t3=document.querySelector('.s3');
let pa1 = t1.getBoundingClientRect();
let pa2 = t2.getBoundingClientRect();
let pa3 = t3.getBoundingClientRect();

let od1 = pa1.top;
let od2 = od1 + 30;
let od3 = od2 + 30;

para[0].classList.add('hide');

let old=0;

jumpbtn.disabled = true;


let height;
let jumpspeedUp;
let jumpspeedDown;
let gv;
let dy , ody;

let ball_cord = ball.getBoundingClientRect();
ody = ball_cord.top;
ball.style.top = ody +"px";
let max_height;
let jumpHeight = {p1 : (ody + 100) , p2 : 100 , p3: 75 , p4 : 37 , p5 : 18 , p6 : 12 , p7 : 6 , p8 : 0};

let sl1 = document.querySelector('.sl1');
let sl2 = document.querySelector('.sl2');
let sl3 = document.querySelector('.sl3');

let sstatus = 1;

let psl1 = sl1.getBoundingClientRect();
let psl2 = sl2.getBoundingClientRect();
let psl3 = sl3.getBoundingClientRect();

let odl1 = psl1.top;
let odl2 = odl1 + 30;
let odl3 = odl2 + 30;

function apply(){
    gv = input.value;
    if(jumpStatus == 4){
        ball.style.top = ody + "px";
        jumpStatus = 1;
    }

    if(gv == "" || gv < 0){
        jumpbtn.disabled = true;
    }
    else{
        ball.style.top = ody + "px";
        jumpbtn.disabled = false;

        if(gv < 0.49){
            height = jumpHeight.p1;
            jumpspeedUp = 1.5;
            para[old].classList.remove('hide');
            old=1;
            para[1].classList.add('hide');
            sl1.style.top = odl1;
            sl2.style.top = odl2;
            sl3.style.top = odl3;
        }
        else if(gv < 1.7){
            height = jumpHeight.p2;
            jumpspeedUp = 1.5;
            jumpspeedDown = 0.5;
            para[old].classList.remove('hide');
            old=2;
            para[2].classList.add('hide');
        }
        else if(gv < 3.7){
            height = jumpHeight.p3
            jumpspeedUp = 1;
            jumpspeedDown = 0.8;
            para[old].classList.remove('hide');
            old=3;
            para[3].classList.add('hide');
        }
        else if(gv < 8.8){
            height = jumpHeight.p4
            jumpspeedUp = 1;
            jumpspeedDown = 1;
            para[old].classList.remove('hide');
            old=4;
            para[4].classList.add('hide');
        }
        else if(gv < 15){
            height = jumpHeight.p5;
            jumpspeedUp = 2 ;
            jumpspeedDown = 2;
            para[old].classList.remove('hide');
            old=5;
            para[5].classList.add('hide');
        }
        else if(gv < 20){
            height = jumpHeight.p6;
            jumpspeedUp = 2 ;
            jumpspeedDown = 2;
            para[old].classList.remove('hide');
            old=6;
            para[6].classList.add('hide');
        }
        else if(gv < 30){
            height = jumpHeight.p7;
            jumpspeedUp = 2 ;
            jumpspeedDown = 2;
            para[old].classList.remove('hide');
            old=7;
            para[7].classList.add('hide');
        }
        else{
            height = jumpHeight.p8;
            jumpspeedUp = 2 ;
            jumpspeedDown = 2;
            para[old].classList.remove('hide');
            old=8;
            para[8].classList.add('hide');
            t1.style.top = od1 + "px";
            t2.style.top = od2 + "px";
            t3.style.top = od3 + "px";
        }
        max_height = (ody - height);
        dy = ody;
    }
}

let jumpStatus = 1;
function jump(){
    if(jumpStatus == 1 && gv <= 30){
        jumpStatus = 2;
        jumpUp();
    }
    if(jumpStatus == 1 && gv > 30){
        moveTextDown();
    }
}

function jumpUp(){
    if(jumpStatus == 2 && dy > max_height){
        dy = dy - jumpspeedUp;
        //console.log(dy);
        ball.style.top = dy + "px";
        if(dy < (odl3 + 100) && sstatus == 1){
            sstatus = 2;
            moveTextUp();
        }
        window.requestAnimationFrame(jumpUp);
    }
    else{
        if(gv > 0.48){
            jumpStatus = 3;
            jumpDown();
        }
        else{
            jumpStatus = 4;
        }
    }
}

function jumpDown(){
    if(jumpStatus == 3 && dy <= ody){
        dy += jumpspeedDown;
        ball.style.top = dy + "px";
        window.requestAnimationFrame(jumpDown);
    }
    else{
        jumpStatus = 1;
    }
}

let tstatus = true;
let dp1 = od1;
let dp2 = od2;
let dp3 = od3;
function moveTextDown(){

    if(dp3 < ody){
        t3.style.top = dp3 + "px";
        dp3 += 5;
        tstatus = true;
    }
    if(dp2 < ody){
        t2.style.top = dp2 + "px";
        dp2 += 5;
        tstatus = true;
    }
    if(dp1 < ody){
        t1.style.top = dp1 + "px";
        dp1 += 5;
        tstatus = true;
    }
    else{tstatus = false;}

    if(tstatus == true){
        window.requestAnimationFrame(moveTextDown);
    }
    else{
        tstatus = true;
        dp1 = od1;
        dp2 = od2;
        dp3 = od3;
    }   
}



let dsl1 = odl1;
let dsl2 = odl2;
let dsl3 = odl3;

function moveTextUp(){
    
    if(sstatus == 2){
        if(dsl1 > -200){
            sl1.style.top = dsl1 + "px";
            dsl1 = dsl1 - 1.5;
        }
        if(dsl2 > -200){
            sl2.style.top = dsl2 + "px";
            dsl2 = dsl2 - 1.5;
        }
        if(dsl3 > -200){
            sl3.style.top = dsl3 + "px";
            dsl3 = dsl3 - 1.5;
        }
        else{
            sstatus = 3;
        }
    }

    if(sstatus == 2){
        window.requestAnimationFrame(moveTextUp);
    }
    else{
        sstatus = 1;
        dsl1 = odl1;
        dsl2 = odl2;
        dsl3 = odl3;
    }
}


