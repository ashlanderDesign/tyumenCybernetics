<template>
  <div class="content">
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