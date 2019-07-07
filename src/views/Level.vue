<template>
  <div class='container'>
    <button class="show-hint" v-on:click='hint = true' v-if='this.$route.name == "level" && hint == false'><img src="../assets/light.png"></button>
    <div class="extra-hint" v-if='extra == true'>
      <div class="text">
        {{missions[this.$route.query.id - 1].theory}}
      </div>
      <button class='close' v-on:click='extra = false'></button>
    </div>
    <div class="hint" v-if='this.$route.name == "level" && hint'>
      <div class="surfer">
        <img src="../assets/surfer.png" alt="">
      </div>
      <div class="hint-body" v-if='dialogue'>
        <span class='text'>{{missions[this.$route.query.id - 1].dialogue}}</span>
        <button class='close' v-on:click='hint = false'>Понятно</button>
        <button class='showExtra' v-on:click='extra = true'>Подсказка</button>
      </div>
      <div class="hint-error" v-if='failure'>
        <span class='text'>{{missions[this.$route.query.id - 1].wrong}}</span>
        <button class='retry' onclick='location.reload()'>Попробовать снова</button>
      </div>
      <div class="hint-success" v-if='success'>
        <span class='text'>{{missions[this.$route.query.id - 1].success}}</span>
        <button>Продолжить</button>
      </div>
    </div>
    <h1>{{missions[this.$route.query.id - 1].title}}</h1>
    <div class="browser on">
    	<div class="titlebar">
    		<div class="controls">
    			<div class="btn red"></div>
    			<div class="btn yellow"></div>
    			<div class="btn green"></div>
    		</div>
    		<div class="url-input">
    			<input type="text" placeholder="Введите адрес">
    		</div>
    		<div class="brand">
    			<span>Тюмень Кибернетикс</span>
    		</div>
    	</div>
    	<div class="browser-content">
        <div class="level-1" v-if='this.$route.query.id == 1'>
          <span class='title'>Выберите надежный пароль</span>
          <div class="answers">
            <div v-on:click='check(1)' class="option">
              ялюблюспать2019
            </div>
            <div v-on:click='check(2)' class="option">
              hG7$ak9*3@p1\w92\*$fjwe89ej$%EYr8
            </div>
            <div v-on:click='check(3)' class="option">
              qwerty12345
            </div>
          </div>
        </div>
        <div class="level-2" v-if='this.$route.query.id == 2'>
          <span class='title'>Заполните форму</span>
        </div>
        <div class="level-3" v-if='this.$route.query.id == 3'>
        </div>
        <div class="level-4" v-if='this.$route.query.id == 4'>
        </div>
        <div class="level-5" v-if='this.$route.query.id == 5'>
        </div>
        <div class="level-6" v-if='this.$route.query.id == 6'>
        </div>
    	</div>
    </div>
    <div class="phone off">
    	<div class="statusbar">
    		<div class="signal">
    			4G MTS
    		</div>
    		<div class="time">
    			12:42
    		</div>
    		<div class="battery">
    			<img src="../assets/battery.png" alt="">
    		</div>
    	</div>
      <div class="phone-content">
        <div class="phone-messages on">
          <div class="header">
            <span>Сообщения</span>
          </div>
          <div class="message">

          </div>
          <div class="new-message">
            Написать сообщение
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data: function(){
      return {
        missions : [
          {
            title: `Авторизуйся, это так просто`,
            theory: `Пароль должен быть уникальным, надежным и трудно угадываемым. Пароль должен
включать буквы (строчные и прописные), цифры и символы
И еще несколько лайфхаков:
 Запоминайте или записывайте ваши пароли.
 Никогда не используйте один и тот же пароль в разных аккаунтах.
 Меняйте пароль каждые несколько месяцев.`,
            dialogue: `Здорова, мы начинаем наше путешествие по кибер пространству. Но для этого мне нужен
надежный пароль. Помоги мне =)`,
            wrong: `Ой, а пароль то очень слабый оказался, меня взломали:(`,
            success: `Теперь даже русские хакеры не взломают мой аккаунт!`
          },
          {
            title: `Давай знакомится`,
            theory: `Не давайте ваше полное имя, адрес или телефонный номер кому-либо в сети, если вы не
доверяете такому человеку и не знаете его лично.
Разглашая личную информацию, вы ставите под угрозу не только ваши аккаунты и личные
данные, но и вашу физическую безопасность. Многие сомнительные люди используют чаты,
социальные сети и другие веб-сайты для сбора информации, которая затем используется против
вас (на работе или дома).`,
            dialogue: `Теперь у тебя есть надежный пароль, но остался еще один важный шаг. Заполнить
информацию о себе. Если не уверен, что именно стоит писать, используй подсказку.`,
            wrong: `Откуда эти мошенники узнали мои личные данные...`,
            success: `Замечательно, теперь я смогу общаться со своими друзьями в интернете!`
          },
          {
            title: `Социальная жизнь`,
            theory: `Детальная информация, которой вы делитесь в социальных сетях, также угрожает вашей
физической безопасности. Например, узнав ваш адрес и время, в которое вас не бывает дома,
мошенники могут ограбить вас (особенно, когда они видят фотографии вашего нового телевизора,
компьютера и ювелирных изделий). Не размещайте в сети личную информацию, такую как ваш
домашний адрес, номер телефона, ежедневное расписание и привычки.`,
            dialogue: `Давно я не постил что-то в социальных сетях. Помоги мне выбрать пост`
          },
          {
            title: `Ящиков - много не бывает`,
            theory: `Заведите несколько электронных почтовых ящиков. А лучше 3. Этим шагом вы
спасетесь от спама и других нежелательных писем.
- Рабочий почтовый ящик используйте для деловой переписки (во многих случаях такой
почтовый ящик вам выделят в вашей компании).
- Личный почтовый ящик используйте для интернет-банкинга, поиска работы,
страхования и другой официальной и личной переписки. Адрес личной электронной
почты можно сообщить близким друзьям и родным.
- Используйте третий адрес электронной почты для входа в онлайн-магазины, сайты
ресторанов или других мест, где вы не хотите оставлять ваш личный электронный адрес.
Вы также можете использовать этот адрес электронной почты на сайтах социальных
сетей. Спам, приходящий на этот адрес, не помешает вам вести личную или деловую
переписку.`,
            dialogue: `Вот мне снова понадобилась твоя помощь - помоги мне с почтовыми рассылками`
          },
          {
            title: `Серьезное дело`,
            theory: `Используй полученные ранее знания=)`,
            dialogue: `Мои друзья рассказали о новой социальной сети. Помоги мне в ней зарегистрироваться и
написать свой первый пост.`
          },
          {
            title: `Сёрфер учит сёрфить`,
            theory: `Обрати внимание на ссылку, если она содержит странные символы, цифры вместо букв,
то скорей всего сайт не настоящий и он может украсть твои данные. А также, если вам кажется
что адрес сайта подозрительной, скорее всего так и есть. Не стоит посещать данные сайты.`,
            dialogue: `Эй,чувак, давай я научу тебя серфить в интернете и не падать на волнах. Первое, что тебе
нужно сделать это выбрать правильную доску. Ну, что погнали?`,
            wrong: ``,
          }
        ],
        levels: [
          {
            answer: 2
          }
        ],
        failure: false,
        success: false,
        dialogue: true,
        check: function(userAnswer){
          if(userAnswer == this.levels[this.$route.query.id - 1].answer){
            this.hint = true;
            this.dialogue = false;
            this.success = true;
          }
          if(userAnswer != this.levels[this.$route.query.id - 1].answer){
            this.hint = true;
            this.dialogue = false;
            this.failure = true;
          }
        },
        hint: true,
        extra: false
      }
    }
  }
</script>
<style>
  h1{
    width: 100%;
  }
.container{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
	.browser{
		width: 50vw;
		height: 60vh;
		background-color: #fff;
		margin: 2vh auto;
		border-radius: 14px;
		box-sizing: border-box;
		padding: 1vw 1vh;
		position: relative;
    box-shadow: 2px 0px 8px 0px rgba(0, 0, 0, 0.4);
	}

	.phone{
		width: 20vw;
		height: 80vh;
		background-color: #fff;
		margin: 2vh auto;
		border-radius: 18px;
		box-sizing: border-box;
		padding: 1vh .5vw;
		position: relative;
    box-shadow: 2px 0px 8px 0px rgba(0, 0, 0, 0.4);
	}

  .phone-messages .header{
    width: 100%;
    background-color: #fdac00;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1vw 1vh;
    box-sizing: border-box;
  }

	.phone .statusbar{
		width: 100%;
		height: 7%;
		background-color: #000;
		border-radius: 18px 18px 0 0;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-ms-align-items: center;
		align-items: center;
		justify-content: space-around;
    font-size: .8rem;
	}

  .browser-content .level-1{
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 50%;
    height: 50%;
    background-color: #fff;
    border-radius: 14px;
    padding: 2%;
  }

  .hint-error{
    width: 40vw;
    height: 30vh;
    padding: 5px;
    background-color: red;
    position: absolute;
    right: 5px;
    bottom: 5px;
    border-radius: 7px;
    box-sizing: border-box;
  }

  .hint-error .text{
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
  }

  .hint-error button{
    background: transparent;
    border: none;
    font-size: 1.3rem;
    color: #fff;
  }

  .hint-success{
    width: 40vw;
    height: 30vh;
    padding: 5px;
    background-color: #13dc13;
    position: absolute;
    right: 5px;
    bottom: 5px;
    border-radius: 7px;
    box-sizing: border-box;
  }

  .hint-success .text{
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
  }

  .hint-success button{
    border: none;
    background: transparent;
    font-size: 1.3rem;
    color: #fff;
  }

  .answers{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 0 auto;
  }

  .answers .option{
    background-color: #cecece;
    padding: 2% 4%;
    border-radius: 50px;
    margin: 2% 0;
  }

  .browser-content .level-1 input{
    margin: 8% auto;
    border: none;
    border-radius: 50px;
    width: 80%;
    padding: 2% 4%;
    background-color: #cecece;
  }

  .browser-content .level-1 button{
    padding: 2% 4%;
    background-color: #3067ff;
    border-radius: 50px;
    border: none;
    color: #fff;
  }

  .phone .phone-content{
    width: 100%;
    height: 93%;
    background-color: #cecece;
    border-radius: 0 0 18px 18px;
    transform: translate(-50%, -50%);
		left: 50%;
		top: 46%;
    position: relative;
  }

  .phone-messages .new-message{
    position: absolute;
    transform: translate(-50%, -50%);
    bottom: 2%;
    width: 70%;
    background-color: #1365f5;
    padding: 2vh 1vw;
    border-radius: 50px;
    box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
    left: 50%;
  }

  .statusbar .battery{
    width: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .statusbar .signal{
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .statusbar .time{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .battery img{
    width: 100%;
  }

	.browser .titlebar{
		width: 100%;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-ms-align-items: center;
		align-items: center;
		justify-content: space-between;
	}

	.titlebar .controls{
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-ms-align-items: center;
		align-items: center;
		justify-content: space-around;
		width: 10%;
	}

	.titlebar .url-input{
		width: 50%;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-ms-align-items: center;
		align-items: center;
		justify-content: center;
	}

	.url-input input{
		background-color: #cecece;
		border: none;
		border-radius: 50px;
		width: 100%;
		padding: 5px 15px;
	}

	.titlebar .brand{
		color: #000;
		font-weight: 600;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-ms-align-items: center;
		align-items: center;
		justify-content: center;
		width: 30%;
	}

	.browser .browser-content{
		position: relative;
		width: 100%;
		height: 90%;
		transform: translate(-50%, -50%);
		left: 50%;
		top: 50%;
		border-radius: 14px;
		background-color: #cecece;
	}

	.btn{
		width: 16px;
		height: 16px;
		background-color: #cecece;
		border-radius: 50%;
	}

	.on{
		display: block;
	}

	.off{
		display: none;
	}

	.btn.red{
		background-color: red;
	}
	.btn.green{
		background-color: lightgreen;
	}
	.btn.yellow{
		background-color: orange;
	}
</style>
