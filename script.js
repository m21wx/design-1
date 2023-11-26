	
/*  Start Scroll Page */

	let scrollBar = document.querySelector('.scrollBar');
	window.onscroll = ()=>{
	 if(window.scrollY > 1200){
		 scrollBar.style.display='block';
		
	 }else{
		 scrollBar.style.display='none';
	 }
	}
	scrollBar.onclick =()=>{
		window.scrollTo({
			top:0,
			behavior:'smooth',
		})
	}
	
/*  End Scroll Page */	
	
	
	
	
	let a = document.querySelector('.Form-Design .box-form .form-1 button');
	let user =document.querySelector('.user');
	let email =document.querySelector('.email');
	let pass1 =document.querySelector('.pass1');
	let pass2 =document.querySelector('.pass2');
	let iconsForm1User =document.querySelector('.Form-Design .box-form .form-1 .userNme .iconPtn');
	let iconsForm1Email =document.querySelector('.Form-Design .box-form .form-1 .userEmail .iconPtn');
	let iconsForm1Pass =document.querySelectorAll('.Form-Design .box-form .form-1 .pass .iconPtn');
	let domeFromOne =document.querySelector('.Form-Design .dome');
 a.addEventListener('click',(btn)=>{
	let b = false;
	
		if(user.value.length > 5 && pass2.value == pass1.value ){
			let objectFormOne ={u:user.value , e:email.value , ps:pass2.value};	
			cheker()
			let dome =`
					<p> name : ${objectFormOne.u} </p>
					<p> email : ${objectFormOne.e} </p>
					<p> password : ${objectFormOne.ps}  </p>
			`;
			domeFromOne.innerHTML += dome;
			user.value ='';
			email.value ='';
			pass1.value ='';
			pass2.value ='';
		}  
		
	 if(b == false){
		 btn.preventDefault()
		
	 }
 })

 function cheker(){
		user.onkeyup =()=>{
			let  u = user.value
			 if(u !=''){
				if(u.length > 5 ){
					user.style.border='1px solid green';
					iconsForm1User.style.color='green';
					
				}else{
					user.style.border='1px solid red';
					iconsForm1User.style.color='red';
				}
			}
		}
		email.onblur =()=>{
			let  e = email.value
			if(e !=''){
				let eRe =/([a-zA-Z0-9.])+@\w+.(com|net|ar)/ig ;
				if(eRe.test(e) ){
					inptEmail ='yseEmail'
					email.style.border='1px solid green';
					iconsForm1Email.style.color='green';
				}else{
					email.style.border='1px solid red';
					iconsForm1Email.style.color='red';
				}
			}
		}
		
		pass2.onblur =()=>{
			let  ps1 = pass1.value
			let  ps2 = pass2.value
			if(ps1.length > 1 && ps2.length >1 ){
			if(ps2 === ps1 ){
					pass1.style.border='1px solid green';
					pass2.style.border='1px solid green';
					iconsForm1Pass[0].style.color='green';
					iconsForm1Pass[1].style.color='green';
				}
			else{
					pass1.style.border='1px solid red';
					pass2.style.border='1px solid red';
					iconsForm1Pass[0].style.color='red';
					iconsForm1Pass[1].style.color='red';
				}
				}
		}
 }
  cheker()


 // Start textarea
 
	let ulTextArea = Array.from(document.querySelectorAll('.serviceTextArea li'));
	let textArea = document.querySelector('.textarea-Design  textarea');
	let valueTextarea = document.querySelector('.textarea-Design  .valueTextarea');
	let textareaButton = document.querySelector('.textarea-Design  button');

		
		ulTextArea[0].addEventListener('click', text1);
		ulTextArea[1].addEventListener('click', text2);
		ulTextArea[2].addEventListener('click', text3);
		ulTextArea[3].addEventListener('click', text4);
		ulTextArea[4].addEventListener('click', text5);
		ulTextArea[5].addEventListener('click', text6);
		ulTextArea[6].addEventListener('click', text7);
  
  
		function text1(){
			textArea.style.fontWeight='bold';
		};
		function text2(){
			textArea.style.color='red';
		};
		function text3(){
			textArea.style.textTransform='capitalize';
		};
		function text4(){
			textArea.style.textTransform='lowercase';
		};
		function text5(){
			textArea.style.textTransform='uppercase';
		};
		function text6(){
			textArea.style.direction='rtl';
		};
		function text7(){
			textArea.style.direction='ltr';
		};
  
		textareaButton.onclick= valueTextAarea;
		function valueTextAarea(){
			valueTextarea.innerText = textArea.value
		};

 // End textarea


/* 	Start Date-Design-4  */

	let dateY = document.querySelectorAll('.Design-4 .box-input input')[0],
		dateM =  document.querySelectorAll('.Design-4 .box-input input')[1],
		dateD =  document.querySelectorAll('.Design-4 .box-input input')[2],
	    dateButton = document.querySelector('.Design-4 .box-input button'),
	    dateText = document.querySelector('.Design-4  .box-text');

		let newDate = new Date();
		let getY = newDate.getFullYear();
		let getM = newDate.getMonth();
		let getD = newDate.getDate();
		dateButton.onclick =()=>{
			let getdateY = getY - Number(dateY.value )
			let getdateM = 1 + getM - Number(dateM.value)
			let getdateD = getD - Number(dateD.value )
			if(dateY.value !=='' && dateM.value !=='' && dateD.value !==''){
					dateText.innerHTML =`<span>  العمر: ${getdateY} سنة و ${getdateM} شهر و ${getdateD} يوم </span>`;
			}else{
				dateText.innerHTML =' لا يمكن ترك الحقل فارغاً';
			}
			
		};

/* 	End Date-Design-4  */

	
/* Start clock-Design-5 */
		let clock = document.querySelector('.clock'),
			hours = document.querySelector('.hours'),
			minutes = document.querySelector('.minutes'),
			seconds = document.querySelector('.seconds') ;
		setInterval(()=>{
			let clockDate = new Date()
			let getSeconds = clockDate.getSeconds()/ 60 * 360 -90;
			let getMinutes = clockDate.getMinutes() / 60 * 360 -90;		
			let getHours = clockDate.getHours()/ 12 * 360 -90 ;
			seconds.style.cssText =`transForm:rotate(${parseInt(getSeconds)}deg)`
			minutes.style.cssText =`transForm:rotate(${parseInt(getMinutes)}deg)`
			hours.style.cssText =`transForm:rotate(${parseInt(getHours)}deg)`
		
		},1000 )

/* End clock-Design-5 */

/*  Start slider-Design-6  */

 let controlSlider = Array.from(document.querySelectorAll('.control'));
 let imagesSlider = Array.from(document.querySelectorAll('.images img'));
 let numberSlider = document.querySelector('.slider-Number');
 let indexSliderImge = 1;
 let lengthSliderImge = imagesSlider.length;
	controlSlider[0].onclick = conrtolLeftSlider;
	controlSlider[1].onclick = conrtolRightSlider;
	
	function checkerSliderImge(){
		imagesSlider.forEach(e =>{
			e.classList.remove('active');
		})
		numberSlider.innerHTML=`${indexSliderImge} of ${lengthSliderImge}`;
	
		if(indexSliderImge > lengthSliderImge - 1){
			indexSliderImge = 1
	
		}
		if(indexSliderImge < 1){
			
			indexSliderImge = lengthSliderImge - 1;
			
		}
		imagesSlider[indexSliderImge ].classList.add('active');

	}
checkerSliderImge()
	
	function conrtolLeftSlider(){
		 checkerSliderImge()
		 imagesSlider[indexSliderImge--]
	}
	function conrtolRightSlider(){
		 checkerSliderImge()
		 imagesSlider[indexSliderImge++]
	}
		
/*  End slider-Design-6  */


/*  Start images-Design-7 */
	let Choose_aPicture = document.querySelectorAll('.imgJavaScript1 img');
	let Choosea_Picture = document.querySelectorAll('.imgJavaScript2 img')
	let View_images_img = document.querySelector('.View-images img')


		Choose_aPicture.forEach(e=>{
			e.onclick =()=>{
				View_images_img.src = e.src
			}
		})
		//mouseover
		Choosea_Picture .forEach(e=>{
			e.onmouseover =()=>{
				View_images_img.src = e.src
			}
		})



/*  End images-Design-7 */

/* Start sliderTabs-Design-8 */

		let navSliderTabsUl = document.querySelector('.navSliderTabs ul');
		
		//  تم انشاء العنصر
		for(let i = 1 ; i <= 50 ; i++){
			let li =`<li> ${i} </li>`;
			navSliderTabsUl.innerHTML +=li;
		};
		let navSliderTabsUl_LI = document.querySelectorAll('.navSliderTabs ul li');
			
			

			
			
				let navSliderTabsUlbutLeft = document.querySelector('.navSliderTabs .left');
				let navSliderTabsUlbutRight = document.querySelector('.navSliderTabs .right');
				
			
					/*  تغير الازرار بناً على الشروط  */
				 function mangButton(){
						if(navSliderTabsUl.scrollLeft >= 20){
							navSliderTabsUlbutLeft.style.cursor ='pointer';//no-drop
							navSliderTabsUlbutLeft.style.backgroundColor='rgb(255 255 255 / 0)';
						}else{
							navSliderTabsUlbutLeft.style.cursor ='no-drop';
							navSliderTabsUlbutLeft.style.backgroundColor='rgb(0 0 0 / 27%)';
						};
						let valueScrollWidth =  navSliderTabsUl.scrollWidth - navSliderTabsUl.clientWidth - 20 ;//1093
						if(navSliderTabsUl.scrollLeft >= valueScrollWidth){
							navSliderTabsUlbutRight.style.cursor='no-drop';
							navSliderTabsUlbutRight.style.backgroundColor='rgb(0 0 0 / 27%)';
					
						}else{
							navSliderTabsUlbutRight.style.cursor='pointer';
							navSliderTabsUlbutRight.style.backgroundColor='rgb(255 255 255 / 0)';
						}
				 }
				mangButton()
			navSliderTabsUl.addEventListener('scroll' , mangButton);
		
			/* التحكم عن طريق الزرار  */

				navSliderTabsUlbutRight.addEventListener('click',()=>{
					navSliderTabsUl.scrollLeft += 200;
					mangButton()
				});
				navSliderTabsUlbutLeft.addEventListener('click',()=>{
					navSliderTabsUl.scrollLeft -= 200;
					mangButton()
				});
				
				
		
			  /* التحكم عن طريق الماوس */
				// mousedown / mouseup mousemove
				let  btnScroll = false ;
					
				function chBtnScroll(e){
					if(btnScroll == true){
						navSliderTabsUl.scrollLeft -= e.movementX;
						navSliderTabsUl.style.cssText='scroll-behavior:auto ; cursor: grab'

					}else{
						navSliderTabsUl.style.cssText='scroll-behavior:smooth'
					}
				}
			
				navSliderTabsUl.onmousedown =()=>{
					btnScroll = true
				}
				navSliderTabsUl.addEventListener('mousemove',chBtnScroll )
				navSliderTabsUl.onmouseup=()=>{
					btnScroll = false;
				}
		


/* End sliderTabs-Design-8 */











  