const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim,{
	deleteSpeed: 20
} )
.changeDelay(20)
.typeString('Hello World')
.pauseFor(300)
.typeString('<strong>, Dev Full Stack </strong> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #27ae60"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: midnightblue"> React</span> !')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: #ea39ff"> PhP</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #ff6910"> JavaScript</span> !')
.start()