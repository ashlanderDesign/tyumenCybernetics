<template>
  <div>
    <h1>Название уровня</h1>
    <div class="browser off">
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

    	</div>
    </div>
    <div class="phone on">
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

<style>
	.browser{
		width: 50vw;
		height: 60vh;
		background-color: #fff;
		margin: 2vh auto;
		border-radius: 14px;
		box-sizing: border-box;
		padding: 1vw 1vh;
		position: relative;
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
		background-color: green;
	}
	.btn.yellow{
		background-color: yellow;
	}
</style>
